<template>
  <div id="AllProducts" class="teal lighten-5 ">
    <TopNavigation style="position:fixed; z-index:100" class="w-100" />
    <v-container class=" bg-light  "  style="margin-top: 210px;">
      <v-row class="m-0 mt-10">
        <!-- First Section -->
        <div class="col-xl-4    ">
          <v-row>
            <!-- <v-col cols="12" md="12" class="   ">
              <v-text-field
              
                v-model="message"
                :append-outer-icon="message ? 'mdi-search-web' : ''"
                outlined
                placeholder="What are you looking for ?"
                clear-icon="mdi-close-circle"
                clearable
                dense
                @click:append="toggleMarker"
                @click:append-outer="sendMessage"
                @click:prepend="changeIcon"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-col> -->
            <v-col cols="12" md="12">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <span style="font-size:12px; color:#546E7A">
                      <v-icon class="teal--text" small>mdi-map-marker</v-icon>
                      Location
                    </span>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-combobox
                      v-model="locationSelected"
                      clearable
                      small-chips
                      solo
                      flat
                      :items="locations"
                      dense
                      filled
                    ></v-combobox>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="12" md="12">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <span style="font-size:12px; color:#546E7A"
                      ><v-icon class="teal--text" small>mdi-filter</v-icon>
                      Results by date and price</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-combobox
                      v-model="sortSelected"
                      clearable
                      hide-selected
                      small-chips
                      solo
                      :items="items"
                      dense
                      flat
                      label="filter"
                      filled
                      multiple
                    ></v-combobox>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <v-col cols="12" md="12">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <span style="font-size:12px; color:#546E7A"
                      ><v-icon class="teal--text" small>mdi-label</v-icon>
                      Category</span
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row class="">
                      <v-col cols="12" md="12">
                        <img
                          src="https://www.pinclipart.com/picdir/middle/129-1294634_mobile-phone-icon-black-and-white-download-mobile.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Mobile accessories</a
                        >
                      </v-col>
                      <br />
                      <v-col cols="12" md="12">
                        <img
                          src="https://st2.depositphotos.com/2571355/9783/v/950/depositphotos_97835172-stock-illustration-hand-cream-with-chamomile-flat.jpg"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Computer accessories</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/fashion-material-3/128/110-512.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Men's Clothing</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/fashion-and-clothes-accessories-icons/64/Clothes_dress-512.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Women's Clothing</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://us.123rf.com/450wm/dxinerz/dxinerz1803/dxinerz180302722/98106172-glasses-vintage-round-icon-vector-image-can-also-be-used-for-mens-accessories-suitable-for-mobile-ap.jpg?ver=6"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Mes's Accessories</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://previews.123rf.com/images/margolana/margolana1512/margolana151200038/49449510-shopping-related-icons-made-in-circle-shape-women-clothing-and-shoes.jpg"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Women's Accessories</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/grocery-shopping-2-1084059.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          24 Hours Essentials</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://e7.pngegg.com/pngimages/430/445/png-clipart-sport-basketball-olympic-games-icon-sports-equipment-round-icon-sport-orange-thumbnail.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Sport Equipments</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://previews.123rf.com/images/valeriaz/valeriaz1601/valeriaz160100249/67733290-home-electric-kettle-kitchen-equipment-two-pin-plug-round-circle-flat-icon-with-long-shadow-vector.jpg"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Kitchen Equipments</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://icons-for-free.com/iconfiles/png/512/bag+fashion+female+shoe+icon-1320165951135999444.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Shoes & Bags</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/clocks-isometric/512/g7719-512.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Wrist watches</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/electronic-components/567/Transistor-01-512.png"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Electoronics</a
                        >
                      </v-col>
                      <v-col cols="12" md="12">
                        <img
                          src="https://download.seaicons.com/download/i99179/fps.hu/free-christmas-flat-circle/fps.hu-free-christmas-flat-circle-gift.ico"
                          alt="John"
                          width="30"
                          class="rounded-circle"
                        />

                        <a href="" class="btn" style="font-size:12px; ">
                          Gift & Packs</a
                        >
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </div>

        <!-- Second Section -->
        <div class="col-xl-8 ">
          <v-card
            class="mx-auto ma-2"
            outlined
            max-width="600"
            v-for="(item, index) in E_Product[0]"
            :key="index"
            @click="viewsingle(item)"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-col
                  cols="12"
                  md="3"
                  class=" d-flex justify-center align-center"
                >
                  <v-img :src="item.subImg[0]" width="150" height="150"></v-img>
                </v-col>

                <v-col cols="12" md="6">
                  <div class="overline  ">
                    {{ item.name }}
                  </div>
                  <div class=" ">
                    <p style="font-size:12px; color:#546E7A">
                      {{ item.category }}
                    </p>
                  </div>
                  <div class="  ">
                    <p style="font-size:18px; color:#004D40">
                      {{ item.price }}
                    </p>
                  </div>
                  <div class=" mb-4">
                    <p style="font-size:12px; color:#546E7A">
                      {{ item.description }}
                    </p>
                  </div>
                </v-col>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-card-actions>
              <v-btn outlined rounded text>
                Button
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </div>
      </v-row>
    </v-container>

    <!-- Single Product Dialog -->
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
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
                              @click:clear="clearMessage"
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
                              :href="wa_url + viewProduct.contact + ' '"
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
                              ><v-icon>mdi-whatsapp</v-icon> Chat on WhatsApp</a
                            >

                            <a
                              :href="mail_url + viewProduct.contactMail"
                              class="btn"
                              style="font-size:12px; color:#546E7A; text-decoration:none;"
                              ><v-icon>mdi-email</v-icon>
                              {{ viewProduct.contactMail }}</a
                            >
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

                      <!-- <v-col class="bg-danger">
                        sad
                      </v-col> -->
                    </v-row>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <ProductSlideGroup />
        </v-card>
      </v-dialog>
    </v-row>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import ProductSlideGroup from "../components/ProductSlideGroup";
import TopNavigation from "../components/TopNavigation";

const ExternalProducts = require("../router/Products");

export default {
  components: {
    TopNavigation,
    Footer,
    ProductSlideGroup,
  },
  data: () => ({
    E_Product: [],
    dialog: false,
    tab: 0,
    quantity: 1,
    quantityAlert: false,
    wa_url: "https://api.whatsapp.com/send?phone=",
    wa_text: "",
    mail_url: "https://mail.google.com/mail/u/0/#inbox?compose=",
    password: "Password",
    show: false,
    message: "",
    marker: true,
    iconIndex: 0,
    icons: [
      "mdi-emoticon",
      "mdi-emoticon-search",
      "mdi-emoticon-dead",
      "mdi-emoticon-excited",
      "mdi-emoticon-happy",
      "mdi-emoticon-neutral",
      "mdi-emoticon-sad",
      "mdi-emoticon-tongue",
    ],
    sortSelected: ["All"],
    locationSelected: ["All of Kandy"],
    categorySelected: ["Browse All Categoriesy"],
    items: [
      "All",
      "Newest To Top",
      "Oldest To Top",
      "Price: High to low",
      "Price: Low to High",
    ],
    locations: [
      "All of Kandy",
      "Kandy",
      "Katugastota",
      "Gampola",
      "Peradeniya",
      "Akurana",
      "Pilimatalawa",
      "Digana",
      "Kundasale",
      "Gelioya",
      "Nawalapitiya",
      "Galagedara",
      "Wattegama",
      "Kadugannawa",
      "Madawala",
      "Ampitiya",
    ],
    categories: [
      "Browse All Categories",
      "Mobile accessories",
      "Computer accessories",
      "Health and Beauty",
      "Men's Clothing",
      "Women's Clothing",
      "Mes's Accessories",
      "Women's Accessories",
      "24 Hours Essentials",
      "Sport Equipments",
      "Kitchen Equipments",
      "Shoes & Bags",
      "Wrist watches",
      "Electoronics",
      "Gift & Packs",
    ],

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
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },
  mounted() {
    this.E_Product.push(ExternalProducts["Products"]);
  },
  methods: {
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
    quantityDecrease() {
      this.quantity--;
      if (this.quantity == 0) {
        this.quantityAlert = true;
        this.quantity = 1;
      }
    },
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    },
  },
};
</script>

<style>
/* small size */
@media screen and (max-width: 320px) {
  .imgResulution {
    width: 50px;
  }
}

/* medium size */
@media screen and (max-width: 375px) {
  .imgResulution {
    width: 100px;
  }
}

/* large size */
@media screen and (max-width: 425px) {
  .imgResulution {
    width: 200px;
  }
}

/* tablet size */
@media screen and (min-width: 768px) {
  .imgResulution {
    width: 400px;
  }
}

/* laptop size */
@media screen and (max-width: 1024px) {
}

/* laptop Large size */
@media screen and (min-width: 1440px) {
}

/* 4K size */
@media screen and (max-width: 2560px) {
}
</style>
