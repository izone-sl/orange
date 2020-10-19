<template>
  <div class="home">
    <TopNavigation style="position:fixed; z-index:100" class="w-100"/>
    <HomeWelcome class="mt-13"/>
    <ProductSlideGroup />
    <CategoryView />
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
