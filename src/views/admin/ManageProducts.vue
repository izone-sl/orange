<template>
  <div id="ManageProducts">
    <v-app>
      <v-content>
        <dashboardLayout />
        <v-container>
         

          <!-- CRUD DATA TABLE -->
          <v-row class="m-0">
            <v-col md="12" cols="12" class=" ">
              <v-data-table
                :headers="table_heading"
                :items="desserts"
                :search="search"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>MANAGE ALL PRODUCTS</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>

                    <v-spacer></v-spacer>

                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon small>mdi-plus-circle-outline</v-icon>
                          <span class="ml-2">ADD PRODUCT</span>
                        </v-btn>

                        <v-text-field
                          class="mb-2 mr-2"
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                      </template>

                      <!-- <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="Dessert name"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.calories"
                                  label="Calories"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.fat"
                                  label="Fat (g)"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.carbs"
                                  label="Carbs (g)"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="editedItem.protein"
                                  label="Protein (g)"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">
                            Cancel
                          </v-btn>
                          <v-btn color="blue darken-1" text @click="save">
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-card> -->
                      <v-card>
                        <v-card-title class="headline grey lighten-2">
                          {{ formTitle }}
                        </v-card-title>
                        <v-row class="m-0">
                          <v-col cols="12" sm="12">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Product Name"
                              prepend-icon="mdi-subtitles-outline"
                              outlined
                              clearable
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-text-field
                              v-model="editedItem.price"
                              label="Price"
                              prepend-icon="mdi-cash-check"
                              outlined
                              clearable
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-textarea
                              v-model="editedItem.description"
                              clearable
                              clear-icon="mdi-close-circle"
                              prepend-icon="mdi-pen"
                              label="Description"
                              outlined
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-file-input
                              color="deep-purple accent-4"
                              counter
                              label="Pick Your Images"
                              multiple
                              placeholder="Upload Images"
                              prepend-icon="mdi-image"
                              outlined
                              :show-size="1000"
                            >
                              <template v-slot:selection="{ index, text }">
                                <v-chip
                                  v-if="index < 2"
                                  color="deep-purple accent-4"
                                  dark
                                  label
                                  small
                                >
                                  {{ text }}
                                </v-chip>

                                <span
                                  v-else-if="index === 2"
                                  class="overline grey--text text--darken-3 mx-2"
                                >
                                  +{{ files.length - 2 }} File(s)
                                </span>
                              </template>
                            </v-file-input>
                          </v-col>
                          <!-- {{ editedItem.subImg }} -->
                          <!-- <v-col
                            cols="12"
                            md="12"
                            v-for="(i, index) in editedItem.subImg"
                           
                          >
                            <v-avatar>
                              <img :src="i" alt="Logo" />
                            </v-avatar>
                            <br />
                          </v-col> -->

                          <v-container>
                            <v-list-item
                              v-for="(i, index) in editedItem.subImg"
                              :key="index"
                            >
                              <v-list-item-avatar>
                                <v-img :src="i"></v-img>
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title></v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-icon>
                                <v-icon
                                  @click="removeImage(i, index)"
                                  class="red--text"
                                  >mdi-trash-can-outline</v-icon
                                >
                              </v-list-item-icon>
                            </v-list-item>
                          </v-container>
                        </v-row>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn text @click="dialog = false">
                            Cancel
                          </v-btn>

                          <v-btn color="primary" @click="dialog = false">
                            Post
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <!-- ADD Product Dialog -->
                    <div class="text-center">
                      <!-- <v-dialog v-model="dialog" width="500">
                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            Post New Ads
                          </v-card-title>
                          <v-row class="m-0">
                            <v-col cols="12" sm="12">
                              <v-text-field
                                label="Product Name"
                                prepend-icon="mdi-subtitles-outline"
                                outlined
                                clearable
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-text-field
                                label="Price"
                                prepend-icon="mdi-cash-check"
                                outlined
                                clearable
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea
                                clearable
                                clear-icon="mdi-close-circle"
                                prepend-icon="mdi-pen"
                                label="Description"
                                outlined
                              ></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-file-input
                                v-model="files"
                                color="deep-purple accent-4"
                                counter
                                label="Pick Your Images"
                                multiple
                                placeholder="Upload Images"
                                prepend-icon="mdi-image"
                                outlined
                                :show-size="1000"
                              >
                                <template v-slot:selection="{ index, text }">
                                  <v-chip
                                    v-if="index < 2"
                                    color="deep-purple accent-4"
                                    dark
                                    label
                                    small
                                  >
                                    {{ text }}
                                  </v-chip>

                                  <span
                                    v-else-if="index === 2"
                                    class="overline grey--text text--darken-3 mx-2"
                                  >
                                    +{{ files.length - 2 }} File(s)
                                  </span>
                                </template>
                              </v-file-input>
                            </v-col>
                          </v-row>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text>
                              Cancel
                            </v-btn>

                            <v-btn color="primary" @click="dialog = false">
                              Post
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </div>

                    <!-- DELETE DIALOG -->
                    <v-dialog v-model="dialogDelete" persistent max-width="500">
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
                            @click="dialogDelete = false"
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

                    <!-- Single Product Dialog -->
                    <v-row justify="center">
                      <v-dialog
                        v-model="singleViewdialog"
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
                            <v-btn icon dark @click="singleViewdialog = false">
                              <v-icon>mdi-keyboard-backspace</v-icon>
                            </v-btn>
                            <v-toolbar-title>{{
                              editedItem.name
                            }}</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items> </v-toolbar-items>
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
                                            <v-system-bar
                                              lights-out
                                            ></v-system-bar>
                                            <v-list two-line>
                                              <v-list-item>
                                                <v-list-item-content>
                                                  <v-img
                                                    v-if="editedIndex != -1"
                                                    :src="
                                                      desserts[editedIndex]
                                                        .subImg[tab]
                                                    "
                                                  ></v-img>
                                                </v-list-item-content>
                                              </v-list-item>
                                            </v-list>
                                          </v-card>
                                        </v-row>

                                        <v-row
                                          class="d-flex justify-center mt-3"
                                        >
                                          <v-col md="2" cols="4">
                                            <v-img
                                              v-if="editedIndex != -1"
                                              @click="tab = 0"
                                              :src="
                                                desserts[editedIndex].subImg[0]
                                              "
                                              style="cursor:pointer; width:5rem"
                                            ></v-img>
                                          </v-col>
                                          <v-col md="2" cols="4">
                                            <!-- <v-img
                                              @click="tab = 1"
                                              :src="viewProduct.subImg[1]"
                                              style="cursor:pointer; width:5rem"
                                            ></v-img> -->
                                            <v-img
                                              v-if="editedIndex != -1"
                                              @click="tab = 1"
                                              :src="
                                                desserts[editedIndex].subImg[1]
                                              "
                                              style="cursor:pointer; width:5rem"
                                            ></v-img>
                                          </v-col>
                                          <v-col md="2" cols="4">
                                            <!-- <v-img
                                              @click="tab = 2"
                                              :src="viewProduct.subImg[2]"
                                              style="cursor:pointer; width:5rem"
                                            ></v-img> -->
                                            <v-img
                                              v-if="editedIndex != -1"
                                              @click="tab = 2"
                                              :src="
                                                desserts[editedIndex].subImg[2]
                                              "
                                              style="cursor:pointer; width:5rem"
                                            ></v-img>
                                          </v-col>
                                          <v-col md="2" cols="4">
                                            <!-- <v-img
                                              @click="tab = 3"
                                              :src="viewProduct.subImg[3]"
                                              style="cursor:pointer; width:5rem"
                                            ></v-img> -->
                                            <v-img
                                              v-if="editedIndex != -1"
                                              @click="tab = 3"
                                              :src="
                                                desserts[editedIndex].subImg[3]
                                              "
                                              style="cursor:pointer; width:5rem"
                                            ></v-img>
                                          </v-col>
                                          <v-col md="2" cols="4">
                                            <!-- <v-img
                                              @click="tab = 4"
                                              :src="viewProduct.subImg[4]"
                                              style="cursor:pointer; width:5rem"
                                            ></v-img> -->
                                            <v-img
                                              v-if="editedIndex != -1"
                                              @click="tab = 4"
                                              :src="
                                                desserts[editedIndex].subImg[4]
                                              "
                                              style="cursor:pointer; width:5rem"
                                            ></v-img>
                                          </v-col>
                                        </v-row>
                                      </v-col>
                                      <v-col cols="12" md="7" class="">
                                        <v-row>
                                          <v-col md="12" cols="12" class="">
                                            <h3 class="blue-grey--text">
                                              {{ editedItem.name }}
                                            </h3>
                                            <h5 class="blue-grey--text">
                                              {{ editedItem.category }}
                                            </h5>
                                            <h5 class="teal--text">
                                              {{ editedItem.price }}
                                            </h5>
                                            <br />
                                            <p
                                              class="text-justify blue-grey--text text--lighten-1"
                                            >
                                              {{ editedItem.description }}
                                            </p>
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
                  </v-toolbar>
                </template>

                <!-- CRUD ACTIONS -->
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="viewItem(item)">
                    mdi-eye
                  </v-icon>
                  <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item)">
                    mdi-delete
                  </v-icon>
                </template>

                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">
                    Reset
                  </v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import dashboardLayout from "../../components/adminLayout";
const ExternalProducts = require("../../router/Products");

export default {
  name: "ManageProducts",
  components: {
    dashboardLayout,
  },
  data: () => ({
    search: "",
    dialog: false,
    singleViewdialog: false,
    dialogDelete: false,
    // headers: [
    //   {
    //     text: "Dessert (100g serving)",
    //     align: "start",
    //     sortable: false,
    //     value: "name",
    //   },
    //   { text: "Calories", value: "calories" },
    //   { text: "Fat (g)", value: "fat" },
    //   { text: "Carbs (g)", value: "carbs" },
    //   { text: "Protein (g)", value: "protein" },
    //   { text: "Actions", value: "actions", sortable: false },
    // ],
    table_heading: [
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
        text: "Posted By",
        align: "start",
        sortable: true,
        value: "contact",
      },
      {
        text: "Date",
        align: "start",
        sortable: true,
        value: "date",
      },
      { text: "Actions", value: "actions", sortable: false },
    ],
    E_Product: [],
    tab: 0,
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
      return this.editedIndex === -1 ? "Add New Product" : "Edit Product";
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
        contact: element.contact,
        subImg: element.subImg,

        date: element.date,
      });

      //
    }
  },

  methods: {
    initialize() {
      this.desserts = [
        // {
        //   id: "1",
        //   name: "Mobile Tripod 3110",
        //   price: "Rs. 1,750",
        //   category: "Mobile accessories",
        //   postedBy: "Admin",
        //   date: "10-10-2020",
        // },
        // {
        //   id: "2",
        //   name: "Wireless Koniycoi Magnetic Headphone",
        //   price: "Rs. 2,700",
        //   category: "Mobile accessories",
        //   postedBy: "Admin",
        //   date: "10-10-2020",
        // },
      ];
    },

    viewItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.singleViewdialog = true;
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      // this.singleViewdialog = true;
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

    removeImage(i, index) {
      // console.log(i)
      console.log(index);
      console.log(this.desserts[this.editedIndex].subImg);

      if (this.desserts[this.editedIndex].subImg.length <= 1) {
        alert(
          "You cannot delete all the images. if you want to delete this image, please upload another image and delete this."
        );
      } else {
        this.desserts[this.editedIndex].subImg.splice(index, 1);
      }
      // desserts[0].subImg
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
