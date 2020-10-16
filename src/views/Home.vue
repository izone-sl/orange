<template>
  <div class="home">
    <!-- <TopNavigation /> -->
    <HomeWelcome/>
    <ProductSlideGroup/>
    <DefaultView />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DefaultView from "../components/DefaultView";
// import TopNavigation from "../components/TopNavigation";
import HomeWelcome from "../components/HomeWelcome";
import ProductSlideGroup from "../components/ProductSlideGroup";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DefaultView,
    // TopNavigation,
    HomeWelcome,
    ProductSlideGroup,
  },
};
</script>
