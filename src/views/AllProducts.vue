<template>
  <div id="AllProducts" class="mt-5 teal lighten-5 p-3">
    <v-container class=" bg-light mt-5">
      <!-- <v-row class="m-0">
        <v-col cols="6" md="2" class="p-0 d-flex justify-center align-center">
          <v-toolbar-title>
            <v-icon class="teal--text">mdi-map-marker</v-icon>
            Location</v-toolbar-title
          >
        </v-col>

        <v-spacer></v-spacer>
        <v-col cols="6" md="2" class="p-0 d-flex justify-center align-center">
          <v-toolbar-title
            ><v-icon class="teal--text">mdi-label</v-icon>
            Category</v-toolbar-title
          >
        </v-col>

        <v-spacer></v-spacer>
        <v-col cols="12" md="6" class="p-0 mt-5  ">
          <v-text-field
            v-model="message"
            :append-outer-icon="message ? 'mdi-shopping-search' : ''"
            outlined
            placeholder="Search..."
            clear-icon="mdi-close-circle"
            clearable
            dense
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>

      <hr /> -->

      <v-row class="m-0 mt-1">
        <!-- First Section -->
        <div class="col-xl-4    ">
          <v-row>
            <v-col cols="12" md="12" class="   ">
              <v-text-field
                v-model="message"
                :append-outer-icon="message ? 'mdi-shopping-search' : ''"
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
            </v-col>
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
            v-for="(item, index) in Products"
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
                  <v-img :src="item.imgUrl" width="150" height="150"></v-img>
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
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  data: () => ({
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
    Products: [
      {
        id: 1,
        name: "Kottu Mee 80g - Hot & Spicy",
        price: "Rs. 60",
        description:
          "Prima is proud to announce that Prima Noodles is the preferred brand in the Instant Noodle Category in Sri Lanka (Source: LMRB Household Panel Data), for its superior quality and nutritional value.",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",
        imgUrl:
          "https://static-01.daraz.lk/p/b7a1e391cba5f47d4e9cbb97bdcb3227.jpg_340x340q75.jpg_.webp",
      },
      {
        id: 2,
        name: "Organic Apple Cider Vinegar",
        price: "Rs. 2,500",
        description:
          "Not all vinegars are created equal. This organic Bragg apple cider vinegar with the ‘Mother’ is a high-quality, unfiltered vinegar made from organically grown apples, which still contains the ‘Mother’.",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://my-live-01.slatic.net/p/7e411b56220eb9fc72ce9c968423b5ea.jpg",
      },
      {
        id: 3,
        name: "Baby Cheramy Baby Cologne",
        price: "Rs. 410",
        description:
          "Baby Cheramy with a rich heritage of over 50 years in serving the nation has been able to build trust & confidence by enriching the lives of mothers and babies.The brand’s main equity is in the trust mothers have as a true baby care brand in the country.",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://static-01.daraz.lk/p/05ea5fa643def81301aec954a6c85ee7.jpg_340x340q75.jpg_.webp",
      },
      {
        id: 4,
        name: "Harpic Floral 750ml",
        price: "Rs. 275",
        description:
          "Kills 99.9% of germs. Removes tough stains. Helps fight odour and any unpleasant smell. Better than the ordinary bleach, acid and phenyl",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://static-01.daraz.lk/p/c518d56acdd3a7dfbacb40e785a55568.jpg_340x340q75.jpg_.webp",
      },
      {
        id: 5,
        name: "Nutritional Milk Powder",
        price: "Rs. 1,750",
        description:
          "Sustagen replenishes that body and helps maintain energy for longer. Sustagen may also provide the nutrients that may be lacking due to an insufficient diet.",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://static-01.daraz.lk/p/813b5565d4ac04819f5422591fb0fc9a.jpg_340x340q75.jpg_.webp",
      },
      {
        id: 6,
        name: "Fanta Lemon",
        price: "Rs. 288",
        description: "Bundle of 4 Fanta Lemon 400 ML",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://static-01.daraz.lk/p/d0b73d0be3465ae877b5653c71522aa6.jpg_340x340q75.jpg_.webp",
      },
      {
        id: 7,
        name: "Viva Malted Food Drink",
        price: "Rs. 313",
        description: "Viva Malted Food Drink Original Carton, 400g",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://static-01.daraz.lk/p/7f0e73278d8c8e9b4ae563afbebc9a8a.jpg_340x340q75.jpg_.webp",
      },
      {
        id: 8,
        name: "Organic Banana",
        price: "Rs. 239",
        description: "Organic Banana - Ambul (Baby Lemon)",
        category: "Delivery Service",
        postedBy: "Admin",
        waLink:
          "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

        imgUrl:
          "https://static-01.daraz.lk/p/046d746ebec2284a92fca8d37ec13e1c.jpg_340x340q75.jpg_.webp",
      },
    ],
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },

  methods: {
    viewsingle(item) {
      alert("Product " + item.name + "has been selected");
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

<style></style>
