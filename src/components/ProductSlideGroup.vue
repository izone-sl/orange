<template>
  <div id="ProductSlideGroup">
    <v-row class="m-0">
      <div class=" card teal lighten-4 col-xl-12">
        <v-row>
          <div class="col-xl-1  "></div>
          <div class="col-xl-4  pl-5">
            <h6 class="teal--text">24 Hours Delivery Products</h6>
          </div>
          <div class="col-xl-6 "></div>
        </v-row>
      </div>
    </v-row>

    <v-row class="m-0">
      <div class="mt-4  col-xl-12">
        <v-sheet class="mx-auto" elevation="14" max-width="1400">
          <v-slide-group center-active v-model="model" class="pa-4">
            <v-slide-item v-for="item in E_Product[0]" :key="item.id">
              <!-- <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="100"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card> -->

              <v-card class="mx-auto p-3 ml-5" width="250">
                <v-img :src="item.imgUrl" width="100%" height="250"></v-img>

                <v-card-title v-if="item.name < 16">
                  {{ item.name }}
                </v-card-title>

                <v-card-title v-else>
                  {{ item.name.substring(0, 16) + ".." }}
                </v-card-title>

                <v-card-subtitle>
                  {{ item.price }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="teal darken-4" text @click="viewsingle(item)">
                    View
                  </v-btn>

                  <v-btn color="teal darken-4" text>
                    <a
                      class="btn text-teal darken-4"
                      :href="item.waLink + item.name"
                      ><v-icon class="pl-3"> mdi-whatsapp</v-icon></a
                    >
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="show = !show">
                    <v-icon>{{
                      show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ item.description }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </v-row>
    <!-- SingleView Dialog -->

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card class="border-none">
          <v-toolbar dark color="teal darken-4">
            <v-btn icon dark @click="dialog = false">
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
          <v-list three-line subheader>
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
                                  <v-img :src="viewProduct.subImg[tab]"></v-img>
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
                            <h5 class="teal--text">{{ viewProduct.price }}</h5>
                            <br />
                            <p
                              class="text-justify blue-grey--text text--lighten-1"
                            >
                              {{ viewProduct.description }}
                            </p>
                          </v-col>

                          <v-col md="6" cols="6" class=" ">
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
                             
                              type="number"
                            ></v-text-field>
                          </v-col>

                          <v-col md="6" cols="6" class=" ">
                            <v-btn color="teal text-light">
                              <v-icon small>mdi-cart</v-icon> Place Order
                            </v-btn>
                          </v-col>

                          <v-col md="8" cols="6" class=" ">
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
                              :href="wa_url + viewProduct.contact"
                              class="btn"
                              style="font-size:12px; color:#546E7A; text-decoration:none;"
                              ><v-icon>mdi-whatsapp</v-icon> +{{
                                viewProduct.contact
                              }}</a
                            >

                            <a
                              :href="mail_url + viewProduct.contactMail"
                              class="btn"
                              style="font-size:12px; color:#546E7A; text-decoration:none;"
                              ><v-icon>mdi-email</v-icon>
                              {{ viewProduct.contactMail }}</a
                            >

                            <!-- <p style="font-size:12px; color:#546E7A" class="btn">
                              <v-icon>mdi-email</v-icon> raza@gmail.com
                            </p> -->
                          </v-col>

                          <v-dialog v-model="quantityAlert" max-width="330">
                            <v-card>
                              <v-card-title class="headline">
                                Invalid Quantity Choosed
                              </v-card-title>

                              <v-card-text>
                                You have choosed invalid quantity. if you wish
                                to order a product please choose quantity equal
                                to one or more.
                                <br />
                                Thank you.
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                  color="green darken-1"
                                  text
                                  @click="quantityAlert = false"
                                >
                                  Agree
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
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
  </div>
</template>

<script>
const ExternalProducts = require("../router/Products");
export default {
  name: "ProductSlideGroup",
  data() {
    return {
      model: null,
      show: false,
      E_Product: [],
      dialog: false,
      tab: 0,
      quantity: 1,
      quantityAlert: false,
      wa_url: "https://api.whatsapp.com/send?phone=",
      mail_url: "https://mail.google.com/mail/u/0/#inbox?compose=",
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
        imgUrl: null,
        subImg: ["", "", "", "", ""],
      },
      
    };
  },
  mounted() {
    this.E_Product.push(ExternalProducts["Products"]);
  },
  methods: {
    quantityDecrease() {
      this.quantity--;
      if (this.quantity == 0) {
        this.quantityAlert = true;
        this.quantity = 1;
      }
    },
    viewsingle(item) {
      this.dialog = true;
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
        imgUrl: item.imgUrl,
        subImg: [
          item.imgUrl,
          item.subImg[0],
          item.subImg[1],
          item.subImg[2],
          item.subImg[3],
        ],
      };
      // alert("Product " + item.name + "has been selected");
    },
  },
};
</script>

<style></style>
