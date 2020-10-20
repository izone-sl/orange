<template>
  <div id="CategoryView">
    <v-expansion-panels tile flat class="mt-5">
      <v-expansion-panel class="teal lighten-4">
        <v-expansion-panel-header>
          <span style="font-size:12px; color:#546E7A">
            <h6 class="teal--text">
              <v-icon class="teal--text" small>mdi-label</v-icon> Browse Our All
              Categories
            </h6>
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <!-- <v-combobox
            v-model="locationSelected"
            clearable
            small-chips
            solo
            flat
            :items="locations"
            dense
            filled
          ></v-combobox> -->
          <v-row class="m-0">
            <div class="col-xl-12 mt-5 ">
              <v-row>
                <div class="col-xl-2 "></div>
                <div class="col-xl-8 text-center bg-light">
                  <v-row class="">
                    <div class="col-xl-3  text-center   ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://www.pinclipart.com/picdir/middle/129-1294634_mobile-phone-icon-black-and-white-download-mobile.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Mobile accessories</a>

                      <p style="font-size:12px; color:#546E7A">
                        Find great deals for used electronics in Sri Lanka
                        including mobile phones, computers, laptops, TVs, home
                        theatres and much more.
                      </p>
                    </div>

                    <div class="col-xl-3   text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://st2.depositphotos.com/2571355/9783/v/950/depositphotos_97835172-stock-illustration-hand-cream-with-chamomile-flat.jpg"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Computer accessories</a>

                      <p style="font-size:12px; color:#546E7A">
                        View listings for property in Sri Lanka. Find the
                        cheapest rates for apartments, commercial and
                        residential properties, as well as for land and plots.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/fashion-material-3/128/110-512.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Men's Clothing</a>

                      <p style="font-size:12px; color:#546E7A">
                        Buy and sell new and used home appliances including
                        furniture, kitchen items, garden products and other
                        household items in Sri Lanka
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/fashion-and-clothes-accessories-icons/64/Clothes_dress-512.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Women's Clothing</a>

                      <p style="font-size:12px; color:#546E7A">
                        Buy and sell used musical instruments, sports gear and
                        accessories, art and collectibles, items for kids and
                        more.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://us.123rf.com/450wm/dxinerz/dxinerz1803/dxinerz180302722/98106172-glasses-vintage-round-icon-vector-image-can-also-be-used-for-mens-accessories-suitable-for-mobile-ap.jpg?ver=6"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Mes's Accessories</a>

                      <p style="font-size:12px; color:#546E7A">
                        Search from the widest variety of pets in Sri Lanka.
                        Select from dogs, puppies, cats, kittens, birds and
                        other domesticated animals.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://previews.123rf.com/images/margolana/margolana1512/margolana151200038/49449510-shopping-related-icons-made-in-circle-shape-women-clothing-and-shoes.jpg"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Women's Accessories</a>

                      <p style="font-size:12px; color:#546E7A">
                        Everything you need to look and feel amazing! check out
                        the latest fashion items and a range of health and
                        beauty products being offered in Sri Lanka.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/grocery-shopping-2-1084059.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> 24 Hours Essentials</a>

                      <p style="font-size:12px; color:#546E7A">
                        Browse through a range of business services and
                        industrial companies offering products and services to
                        both other businesses and consumers alike.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://e7.pngegg.com/pngimages/430/445/png-clipart-sport-basketball-olympic-games-icon-sports-equipment-round-icon-sport-orange-thumbnail.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Sport Equipments</a>

                      <p style="font-size:12px; color:#546E7A">
                        Find great deals for used electronics in Sri Lanka
                        including mobile phones, computers, laptops, TVs, home
                        theatres and much more.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://previews.123rf.com/images/valeriaz/valeriaz1601/valeriaz160100249/67733290-home-electric-kettle-kitchen-equipment-two-pin-plug-round-circle-flat-icon-with-long-shadow-vector.jpg"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Kitchen Equipments</a>

                      <p style="font-size:12px; color:#546E7A">
                        Browse through a range of service based companies
                        offering services to both other businesses and consumers
                        alike
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://icons-for-free.com/iconfiles/png/512/bag+fashion+female+shoe+icon-1320165951135999444.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Shoes & Bags</a>

                      <p style="font-size:12px; color:#546E7A">
                        Find great deals for used electronics in Sri Lanka
                        including mobile phones, computers, laptops, TVs, home
                        theatres and much more.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/clocks-isometric/512/g7719-512.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Wrist watches</a>

                      <p style="font-size:12px; color:#546E7A">
                        Buy and sell books and magazines, find tuition, classes
                        and other educational resources in Sri Lanka.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/electronic-components/567/Transistor-01-512.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Electoronics</a>

                      <p style="font-size:12px; color:#546E7A">
                        Find great deals for used electronics in Sri Lanka
                        including mobile phones, computers, laptops, TVs, home
                        theatres and much more.
                      </p>
                    </div>
                    <div class="col-xl-3  text-center  ">
                      <v-btn tile depressed large x-small href="/Products">
                        <img
                          src="https://download.seaicons.com/download/i99179/fps.hu/free-christmas-flat-circle/fps.hu-free-christmas-flat-circle-gift.ico"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Gift & Packs</a>

                      <p style="font-size:12px; color:#546E7A">
                        Find agricultural products, including fresh crop seeds,
                        plants and fertilizers in Sri Lanka.
                      </p>
                    </div>
                  </v-row>
                </div>
                <div class="col-xl-2 "></div>
              </v-row>
            </div>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- <v-row class="m-0 mt-5">
      <div class=" card teal lighten-4 col-xl-12">
        <v-row>
          <div class="col-xl-1  "></div>
          <div class="col-xl-4  pl-5">
            <h6 class="teal--text">Browse Our All Categories</h6>
          </div>
          <div class="col-xl-6 "></div>
        </v-row>
      </div>
    </v-row> -->

    <!-- Post Ads Section -->
    <v-row class="m-0">
      <div
        class="col-xl-12 
        teal lighten-5 
        d-flex 
        justify-content-center 
        align-items-center"
      >
        <h2 class="light-blue--text text-center">
          Do you have something to sell?
        </h2>
      </div>
    </v-row>
    <v-row class="m-0">
      <div
        class="col-xl-12 
        teal lighten-5 
        d-flex 
        justify-content-center 
        align-items-center"
      >
        <v-btn class="ma-2" outlined color="teal" @click="dialog = true">
          POST YOUR ADS NOW FOR FREE !
          <v-icon class="pl-3"> mdi-google-ads</v-icon>
        </v-btn>
      </div>
    </v-row>

    <!-- Dialog -->
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
  </div>
</template>

<script>
export default {
  name: "CategoryView",
  data() {
    return {
      dialog: false,
      e1: 1,
      files: [],
    };
  },
};
</script>

<style></style>
