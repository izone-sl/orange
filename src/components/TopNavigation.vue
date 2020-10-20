<template>
  <div>
    <v-card color="teal darken-4" flat height="130px" tile>
      <v-toolbar dense color="teal darken-4" height="60">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-icon class="text-light" @click="drawer = true">mdi-menu</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-light ">
          <!-- <v-avatar >
            <img src="../assets/exlogo.png" alt="Logo" />
          </v-avatar> -->

          <span class="Webtitle btn"
            ><a href="/" class="nav-link text-light"> ExLister.LK</a></span
          >
          <v-btn icon to="/">
            <v-avatar>
              <img src="../assets/exlogo.png" alt="Logo" />
            </v-avatar>
          </v-btn>
        </v-toolbar-title>

        <!-- <v-btn
          color="teal darken-4"
          depressed
          class="text-light"
          @click="dialog = true"
        >
          POST ADS <v-icon class="pl-3"> mdi-plus-circle</v-icon>
        </v-btn> -->

        <!-- <p>Order online with 100% buyer protection</p> -->

        <!-- <v-btn color="teal darken-4" depressed class="text-light">
          <a
            class="btn text-light"
            href="https://api.whatsapp.com/send?phone=94767220996&text=Hello%20There,%20i%20need%20a%20product%20can%20you%20help%20me%20to%20purchase?"
          >
            <v-icon class="pl-3"> mdi-whatsapp</v-icon></a
          >
        </v-btn> -->
      </v-toolbar>

      <v-row class="m-0  bg-light d-flex justify-center ">
        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <v-btn
            color="teal darken-4"
            depressed
            class="text-light"
            @click="dialog = true"
            small
          >
            POST ADS <v-icon class="pl-3"> mdi-plus-circle</v-icon>
          </v-btn>

          <v-btn color="teal darken-4" depressed class="ml-1 text-light" small>
            <a
              class="text-decoration-none text-light block"
              href="https://api.whatsapp.com/send?phone=94767220996&text=Hello%20There,%20i%20need%20a%20product%20can%20you%20help%20me%20to%20purchase?"
            >
              <v-icon class=" "> mdi-whatsapp</v-icon> Request Products</a
            >
          </v-btn>
        </v-col>

        <v-col cols="12" md="4" class="  ">
          <v-text-field
            v-model="message"
            outlined
            class="mt-5"
            placeholder="What are you looking for ?"
            clear-icon="mdi-close-circle"
            clearable
            append-outer-icon="mdi-magnify"
            dense
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          >
          </v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <!-- <v-btn to="dashboard">
            Dashboard
          </v-btn> -->
          <v-btn
            color="teal darken-4"
            depressed
            class="text-light"
            @click="MyAdsdialog = true"
            small
          >
            MY ADs <v-icon class="pl-3"> mdi-account-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- MY ADS Dialog -->
    <v-row justify="center">
      <v-dialog v-model="MyAdsdialog" persistent max-width="80%">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            WELCOME TO MY-ADs
            <v-spacer></v-spacer>
            <v-icon @click="MyAdsdialog = false">mdi-close</v-icon>
          </v-card-title>
          <v-card flat v-if="MyAds[0].ads.length <= 0">
            <v-card-text class="d-flex align-center justify-center pa-3">
              <v-icon color="red lighten-1" style="font-size:85px;"
                >mdi-close-circle-outline</v-icon
              >
            </v-card-text>
            <v-card-text class="d-flex align-center justify-center pa-3">
              <!-- <h4>You Have Not Post Any Ads Yet !</h4> -->
              <h5 class="text-justify">YOU HAVE NOT POST ANY ADS YET!</h5>
            </v-card-text>
          </v-card>

          <v-card v-else flat>
            <v-list-item three-line>
              <v-list-item-content>
                <v-col
                  cols="12"
                  md="12"
                  class="  "
                  v-for="(n, index) in MyAds"
                  :key="index"
                >
                  <v-col
                    v-for="(i, key) in n.ads"
                    :key="key"
                    class="  d-flex spacer"
                  >
                    [{{ key + 1 }}] - {{ i }}
                    <v-spacer></v-spacer>
                    <!-- <v-icon class=" "> mdi-delete</v-icon> -->

                    <a
                      class="text-decoration-none text-light block"
                      :href="
                        'https://api.whatsapp.com/send?phone=94767220996&text=Hello%20There, Requesting to delete this *' +
                          i +
                          '* product %0a Posted By ' +
                          n.phone +
                          ''
                      "
                    >
                      <v-icon color="red"> mdi-delete</v-icon>
                    </a>
                  </v-col>
                </v-col>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="MyAdsdialog = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="MyAdsdialog = false">
              Agree
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>
    </v-row>

    <!-- ADD Product Dialog -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Post New Ads
          </v-card-title>

          <!-- Steeper -->
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Account Configuration
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">
                Posting Ads
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      label="User Name"
                      outlined
                      prepend-icon="mdi-account"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      label="Phone"
                      prepend-icon="mdi-phone"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      label="Email"
                      prepend-icon="mdi-email"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      label="Residential Address"
                      prepend-icon="mdi-map-marker"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="dialog = false">
                    Cancel
                  </v-btn>

                  <v-btn color="primary" @click="e1 = 2">
                    Continue
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row>
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

                  <v-btn text @click="dialog = false">
                    Cancel
                  </v-btn>

                  <v-btn color="primary" @click="dialog = false">
                    Post
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-dialog>
    </div>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      class=""
      dark
      temporary
      color=" dark darken-4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="pt-3 text-light d-flex justify-center align-center"
          >
            CONTACT INFORMATION
            <v-spacer></v-spacer>
            <v-icon @click="drawer = false">mdi-close</v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item class="text-decoration-none">
          <v-list-item-icon>
            <v-icon class="teal--text"> mdi-whatsapp</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-light">
              <a
                class="text-decoration-none text-light block"
                href="https://api.whatsapp.com/send?phone=94767220996&text=Hello%20There,%20i%20need%20a%20product%20can%20you%20help%20me%20to%20purchase?"
              >
                CHAT ON WHATSAPP</a
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="text-decoration-none">
          <v-list-item-icon>
            <v-icon class="teal--text"> mdi-phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-light">
              +94 767 220 996
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="text-decoration-none">
          <v-list-item-icon>
            <v-icon class="teal--text"> mdi-mail</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-light">
              catchby@gmail.com
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="pt-3 text-light d-flex justify-center align-center"
          >
            ALL CATEGORIES
            <v-spacer></v-spacer>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.to"
          class="text-decoration-none"
        >
          <v-list-item-icon>
            <v-icon class="teal--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-light">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MyAdsdialog: false,
      dialog: false,
      e1: 1,
      files: [],
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
      drawer: false,
      items: [
        {
          title: "Mobile accessories",
          icon: "mdi-label",
          // to: "/dashboard",
        },
        {
          title: "Computer accessories",
          icon: "mdi-label",
          // to: "/manage_products",
        },
        {
          title: "Health and Beauty",
          icon: "mdi-label",
          // to: "/manage_category",
        },
        {
          title: "Men's Clothing",
          icon: "mdi-label",
          // to: "/post_approval",
        },
        {
          title: "Women's Clothing",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Mes's Accessories",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Women's Accessories",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "24 Hours Essentials",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Sport Equipments",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Kitchen Equipments",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Shoes & Bags",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Wrist watches",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Electoronics",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
        {
          title: "Gift & Packs",
          icon: "mdi-label",
          // to: "/ordered_items",
        },
      ],
      right: null,
      MyAds: [
        {
          id: 2,
          name: "Raza",
          phone: "94777123456",
          address: "Kurugoda",
          email: "raza@gmail.com",
          regdate: "10-10-2020",
          ads: [
            "Table Mate Version 2",
            "Laptop Table E-Table With Cooling Fans Stand",
          ],
        },
      ],
    };
  },
  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },
  methods: {
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
  .Webtitle {
    display: none;
  }
}

/* medium size */
@media screen and (max-width: 375px) {
  .Webtitle {
    display: none;
  }
}

/* large size */
@media screen and (max-width: 425px) {
}

/* tablet size */
@media screen and (max-width: 768px) {
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
