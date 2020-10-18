<template>
  <v-app>
    <TopNavigation />
    <!-- <v-main>
      <Home />
    </v-main> -->

    <router-view></router-view>
  </v-app>
</template>

<script>
import TopNavigation from "./components/TopNavigation";
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home,
    TopNavigation,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
