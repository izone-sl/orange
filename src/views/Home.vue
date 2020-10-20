<template>
  <div class="home">
    <TopNavigation style="position:fixed; z-index:100" class="w-100" />
    <HomeWelcome class="mt-13" />
    <ProductSlideGroup />
    <CategoryView />
    <ProductSlideGroup class="mt-6" />

    <v-row class="m-0">
      <v-col md="4" cols="12">
        <v-list-item-avatar
          tile
          width="100%"
          height="250"
          color="grey"
          class="d-flex align-center justify-center"
        >
          <p>advertisement Image 01</p>
        </v-list-item-avatar>
      </v-col>
      <v-col md="4" cols="12">
        <v-list-item-avatar
          tile
          width="100%"
          height="250"
          color="grey"
          class="d-flex align-center justify-center"
        >
          <p>advertisement Image 02</p>
        </v-list-item-avatar>
      </v-col>
      <v-col md="4" cols="12">
        <v-list-item-avatar
          tile
          width="100%"
          height="250"
          color="grey"
          class="d-flex align-center justify-center"
        >
          <p>advertisement Image 03</p>
        </v-list-item-avatar>
      </v-col>
    </v-row>

    <ProductSlideGroup class="mt-6" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DefaultView from "../components/DefaultView";
import TopNavigation from "../components/TopNavigation";

import HomeWelcome from "../components/HomeWelcome";
import ProductSlideGroup from "../components/ProductSlideGroup";
import CategoryView from "../components/CategoryView";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DefaultView,
    TopNavigation,
    HomeWelcome,
    ProductSlideGroup,
    CategoryView,
    Footer,
  },
};
</script>
