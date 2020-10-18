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
            <v-slide-item v-for="item in Products" :key="item.id">
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

                <v-card-title>
                  {{ item.name }}
                </v-card-title>

                <v-card-subtitle>
                  {{ item.price }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="teal darken-4" text>
                    View
                  </v-btn>

                  <v-btn color="teal darken-4" text>
                    <!-- <a
                      class="btn text-teal darken-4"
                      href="https://api.whatsapp.com/send?phone=94767220996&text=24" 
                    >
                      <v-icon class="pl-3"> mdi-whatsapp</v-icon>
                    </a> -->

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

          <!-- <v-expand-transition>
            <v-sheet v-if="model != null" height="200" tile>
              <v-row class="fill-height" align="center" justify="center">
                <h3 class="title">Selected {{ model }}</h3>
              </v-row>
            </v-sheet>
          </v-expand-transition> -->
        </v-sheet>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProductSlideGroup",
  data() {
    return {
      model: null,
      show: false,
      Products: [
        {
          id: 1,
          name: "Kottu Mee 80g - Hot & Spicy",
          price: "Rs. 60",
          description:
            "Prima is proud to announce that Prima Noodles is the preferred brand in the Instant Noodle Category in Sri Lanka (Source: LMRB Household Panel Data), for its superior quality and nutritional value.",
          category: "DeliveryService",
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
          category: "DeliveryService",
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
          category: "DeliveryService",
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
          category: "DeliveryService",
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
          category: "DeliveryService",
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
          category: "DeliveryService",
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
          category: "DeliveryService",
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
          category: "DeliveryService",
          postedBy: "Admin",
          waLink:
            "https://api.whatsapp.com/send?phone=94767220996&text=Hi, I am looking to buy this Product, ",

          imgUrl:
            "https://static-01.daraz.lk/p/046d746ebec2284a92fca8d37ec13e1c.jpg_340x340q75.jpg_.webp",
        },
      ],
    
    };
  },
};
</script>

<style></style>
