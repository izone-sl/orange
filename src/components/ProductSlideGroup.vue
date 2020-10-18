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
            "https://cdn.shopify.com/s/files/1/2671/1426/products/Prima-Kottu-Mee-Hot-and-Spicy-Flavour-80g_1200x1200.jpg?v=1550924061",
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
            "https://www.costco.co.uk/medias/sys_master/images/h20/h52/29948251078686.jpg",
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
            "https://www.babycare.lk/image/cache/catalog/demo/product/Baby%20Cheramy/Baby%20Cheramy%20Nappy%20Wash%20Powder-1000x1000.png",
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
            "https://www.kapruka.com/shops/specialGifts/productImages/1266719150015_Harpic(Blue).jpg",
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
            "https://www.freshbox.lk/media/catalog/product/cache/611c351882d010fc6b634c549598d3eb/m/l/mlk_pwder.jpeg",
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
            "https://www.grocereezy.com/wp-content/uploads/2017/02/1247-1.jpg",
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
            "https://athalangata.lk/assets/uploads/7cd083f5264dc8591f6175415c3bd09d.png",
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
            "https://www.meijer.com/content/dam/meijer/product/0000/00/0940/11/0000000940115_a1c1_1200.png",
        },
      ],
    };
  },
};
</script>

<style></style>
