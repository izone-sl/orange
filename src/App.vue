<template>

  <v-app>
    
 
    <v-main>
      <TopNavigation/>
      <DefaultView />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DefaultView from "./components/DefaultView";
import TopNavigation from "./components/TopNavigation";

export default {
  name: "App",

  components: {
    HelloWorld,
    DefaultView,
    TopNavigation,
  },

  data: () => ({
     drawer: false,
      group: null,
  }),
};
</script>
