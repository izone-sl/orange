<template>
  <div id="PostApproval">
    <v-app>
      <v-main>
        <dashboardLayout />
        <v-container>
          <v-row class="m-0">
            <v-col md="12" cols="12" class=" ">
              <!-- DATA TABLE -->
              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>APPROVE POSTS</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <!-- search box -->
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      class="mr-4"
                    ></v-text-field>

                    <!-- delete dialog -->
                    <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title class="headline">
                          Are you sure you want to delete this item?
                        </v-card-title>
                        <v-card-text
                          >Deleting a product will permently remove from the
                          system. click on yes if you wish you delete
                          it</v-card-text
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="closeDelete"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            color="red darken-1"
                            text
                            @click="deleteItemConfirm"
                          >
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>

                <!-- colored panel -->
                <template v-slot:item.approvedStatus="{ item }">
                  <v-chip small :color="getColor(item.approvedStatus)" dark>
                    {{ item.approvedStatus }}
                  </v-chip>
                </template>

                <!-- action panel -->
                <template v-slot:item.actions="{ item }">
                  <!-- {{ item.approvedStatus }} -->

                  <v-icon
                    small
                    class="mr-2"
                    v-if="item.approvedStatus == 'false'"
                    color="green"
                    @click="editItem(item)"
                  >
                    mdi-check-circle-outline
                  </v-icon>
                  <v-icon
                    small
                    class="mr-2"
                    v-else
                    color="red"
                    @click="editItem(item)"
                  >
                    mdi-close-circle-outline
                  </v-icon>

                  <v-icon small class="mr-2" @click="singleView(item)">
                    mdi-eye
                  </v-icon>
                  <v-icon small @click="deleteItem(item)">
                    mdi-delete
                  </v-icon>
                </template>

                <!-- rest button when no data -->
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">
                    Reset
                  </v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>

        <!-- Single Product Dialog -->
        <v-row justify="center">
          <v-dialog
            v-model="singleViewDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card class="border-none">
              <v-toolbar
                dark
                color="teal darken-4"
                style="position:fixed; z-index:100;"
                class="w-100"
              >
                <v-btn icon dark @click="singleViewDialog = false">
                  <v-icon>mdi-keyboard-backspace</v-icon>
                </v-btn>
                <v-toolbar-title>{{ viewProduct.name }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <!-- <v-btn dark text @click="dialog = false">
              Save
            </v-btn> -->
                </v-toolbar-items>
              </v-toolbar>

              <v-list three-line subheader class="pt-11">
                <v-list-item>
                  <v-list-item-content>
                    <v-row class="m-0">
                      <v-col cols="12" md="12" class=" ">
                        <v-row>
                          <v-col cols="12" md="5" class=" ">
                            <v-row>
                              <v-card
                                elevation="10"
                                max-width="300"
                                class="mx-auto"
                              >
                                <v-system-bar lights-out></v-system-bar>
                                <v-list two-line>
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-img
                                        :src="viewProduct.subImg[tab]"
                                      ></v-img>
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-list>
                              </v-card>
                            </v-row>

                            <v-row class="d-flex justify-center mt-3">
                              <v-col md="2" cols="4">
                                <v-img
                                  @click="tab = 0"
                                  :src="viewProduct.subImg[0]"
                                  style="cursor:pointer; width:5rem"
                                ></v-img>
                              </v-col>
                              <v-col md="2" cols="4">
                                <v-img
                                  @click="tab = 1"
                                  :src="viewProduct.subImg[1]"
                                  style="cursor:pointer; width:5rem"
                                ></v-img>
                              </v-col>
                              <v-col md="2" cols="4">
                                <v-img
                                  @click="tab = 2"
                                  :src="viewProduct.subImg[2]"
                                  style="cursor:pointer; width:5rem"
                                ></v-img>
                              </v-col>
                              <v-col md="2" cols="4">
                                <v-img
                                  @click="tab = 3"
                                  :src="viewProduct.subImg[3]"
                                  style="cursor:pointer; width:5rem"
                                ></v-img>
                              </v-col>
                              <v-col md="2" cols="4">
                                <v-img
                                  @click="tab = 4"
                                  :src="viewProduct.subImg[4]"
                                  style="cursor:pointer; width:5rem"
                                ></v-img>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col cols="12" md="7" class="">
                            <v-row>
                              <v-col md="12" cols="12" class="">
                                <h3 class="blue-grey--text">
                                  {{ viewProduct.name }}
                                </h3>
                                <h5 class="blue-grey--text">
                                  {{ viewProduct.category }}
                                </h5>
                                <h5 class="teal--text">
                                  {{ viewProduct.price }}
                                </h5>
                                <br />
                                <p
                                  class="text-justify blue-grey--text text--lighten-1"
                                >
                                  {{ viewProduct.description }}
                                </p>
                              </v-col>

                              <!-- <v-col md="6" cols="6" class=" ">
                                <v-text-field
                                  v-model="quantity"
                                  :append-outer-icon="
                                    quantity ? 'mdi-plus-circle' : null
                                  "
                                  :prepend-icon="
                                    quantity ? 'mdi-minus-circle' : null
                                  "
                                  outlined
                                  clear-icon="mdi-close-circle"
                                  label="Choose Quantity"
                                  dense
                                  @click:append-outer="quantity++"
                                  @click:prepend="quantityDecrease"
                                  @click:clear="clearMessage"
                                  type="number"
                                ></v-text-field>
                              </v-col> -->

                              <!-- <v-col md="6" cols="6" class=" ">
                                <v-btn color="teal text-light">
                                  <v-icon small>mdi-cart</v-icon> Place Order
                                </v-btn>
                              </v-col> -->

                              <v-col md="12" cols="12" class=" ">
                                <h6 class="teal--text">Contact Information</h6>
                                <br />

                                <v-btn
                                  depressed
                                  class="btn"
                                  style="font-size:12px; color:#546E7A; text-decoration:none;"
                                  ><v-icon>mdi-account</v-icon>
                                  {{ viewProduct.postedBy }}</v-btn
                                >

                                <a
                                  :href="
                                    wa_url + viewProduct.contact + ' '
                                  "
                                  class="btn"
                                  style="font-size:12px; color:#546E7A; text-decoration:none;"
                                  ><v-icon>mdi-phone</v-icon> +{{
                                    viewProduct.contact
                                  }}</a
                                >

                                <a
                                  :href="
                                    wa_url +
                                      viewProduct.contact +
                                      '&text=Hello There, i want to get some information about ' +
                                      '%0a' +
                                      ' Product: ' +
                                      viewProduct.name +
                                      ' - Ref - ' +
                                      viewProduct.id +
                                      '%0a' +
                                      ' Category: ' +
                                      viewProduct.category +
                                      '%0a' +
                                      ' Price: ' +
                                      viewProduct.price +
                                      '%0a%0a%0a%0a' +
                                      encodeURIComponent(
                                        ' ' + viewProduct.subImg[0]
                                      ) +
                                      '%0a Contact with owner: https://wa.me/94767220996'
                                  "
                                  class="btn"
                                  style="font-size:12px; color:#546E7A; text-decoration:none;"
                                  ><v-icon>mdi-whatsapp</v-icon> Chat on
                                  WhatsApp</a
                                >

                                <a
                                  :href="mail_url + viewProduct.contactMail"
                                  class="btn"
                                  style="font-size:12px; color:#546E7A; text-decoration:none;"
                                  ><v-icon>mdi-email</v-icon>
                                  {{ viewProduct.contactMail }}</a
                                >
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-dialog>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import dashboardLayout from "../../components/adminLayout";

const ExternalProducts = require("../../router/Products");
export default {
  name: "PostApproval",
  components: {
    dashboardLayout,
  },
  data: () => ({
    search: "",
    E_Product: [],
    tab: 0,
    singleViewDialog: false,
    viewProduct: {
      id: null,
      name: "null",
      price: null,
      description: null,
      category: null,
      postedBy: null,
      contact: null,
      contactMail: null,
      waLink: null,

      subImg: ["", "", "", "", ""],
    },
    wa_url: "https://api.whatsapp.com/send?phone=",
    wa_text: "",
    mail_url: "https://mail.google.com/mail/u/0/#inbox?compose=",

    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "# Ref",
        align: "start",
        sortable: true,
        value: "id",
      },
      {
        text: "Product",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        text: "Price",
        align: "start",
        sortable: true,
        value: "price",
      },
      {
        text: "Category",
        align: "start",
        sortable: true,
        value: "category",
      },

      {
        text: "Date",
        align: "start",
        sortable: true,
        value: "date",
      },
      {
        text: "Approval",
        align: "start",
        sortable: true,
        value: "approvedStatus",
      },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  mounted() {
    this.E_Product.push(ExternalProducts["Products"]);

    for (let index = 0; index < this.E_Product[0].length; index++) {
      const element = this.E_Product[0][index];

      this.desserts.push({
        id: element.id,
        name: element.name,
        price: element.price,
        category: element.category,
        description: element.description,
        postedBy: element.postedBy,
        subImg: element.subImg,
        date: element.date,
        contact: element.contact,
        contactMail: element.contactMail,
        approvedStatus: element.approvedStatus,
      });

      //
    }
  },

  methods: {
    initialize() {
      this.desserts = [
        // {
        //   name: "Frozen Yogurt",
        //   calories: 159,
        //   fat: 6.0,
        //   carbs: 24,
        //   protein: 4.0,
        // },
        // {
        //   name: "Ice cream sandwich",
        //   calories: 237,
        //   fat: 9.0,
        //   carbs: 37,
        //   protein: 4.3,
        // }
      ];
    },
    singleView(item) {
      this.singleViewDialog = true;
      this.tab = 0;

      this.viewProduct = {
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        category: item.category,
        postedBy: item.postedBy,
        contact: item.contact,
        contactMail: item.contactMail,
        waLink: item.waLink,

        subImg: [
          item.subImg[0],
          item.subImg[1],
          item.subImg[2],
          item.subImg[3],
        ],
      };

      this.wa_text = "";
      // alert("Product " + item.name + "has been selected");
    },
    getColor(item) {
      if (item == "false") return "red";
      if (item == "true") return "green";
    },
    editItem(item) {
      if (item.approvedStatus == "true") {
        this.desserts.find((file) => {
          if (file.id == item.id) {
            file.approvedStatus = "false";
          }
        });
      } else {
        this.desserts.find((file) => {
          if (file.id == item.id) {
            file.approvedStatus = "true";
          }
        });
      }

      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
