<template>
  <v-app id="adminLayout">
    <v-app-bar dark app z-index="100" color="teal darken-4 ">
      <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
      <v-spacer></v-spacer>
      Welcome ExLister !
      <v-btn icon to="/">
        <v-avatar>
          <img src="../../assets/exlogo.png" alt="Logo" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="" dark color=" dark darken-4">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="pt-3 text-light d-flex justify-center align-center"
          >
            WELCOME TO DASHBOARD
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="teal--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-light">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey ${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar> -->
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <Dashboard />
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from "./Dashboard";
export default {
  name: "adminLayout",
  components: {
    Dashboard,
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "MANAGE PRODUCTS", icon: "mdi-clipboard-list" },
        { title: "MANAGE CATEGORIES", icon: "mdi-label" },
        { title: "POSTS APPROVAL", icon: "mdi-alert-decagram" },
        { title: "ORDERED ITEMS", icon: "mdi-order-bool-ascending" },
        { title: "REGISTERED CUSTOMERS", icon: "mdi-clipboard-account" },
        { title: "ADVERTISEMENTS CONFIG", icon: "mdi-postage-stamp" },
        { title: "SETTINGS", icon: "mdi-cog" },
        { title: "LOGOUT", icon: "mdi-logout" },
      ],
      right: null,

      
    };
  },
};
</script>
