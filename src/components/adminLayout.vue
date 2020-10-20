<template>
  <!-- <v-app id="adminLayout">
    <v-app-bar dark app z-index="100" color="teal darken-4 ">
      <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
      <v-spacer></v-spacer>
      Welcome ExLister !
      <v-btn icon to="/">
        <v-avatar>
          <img src="../assets/exlogo.png" alt="Logo" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class=""
      dark
      color=" dark darken-4"
    >
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

    <v-main> </v-main>
  </v-app> -->

  <div id="adminLayout">
    <v-app-bar dark app z-index="100" color="teal darken-4 ">
      <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
      <v-spacer></v-spacer>
      Welcome ExLister !
      <v-btn icon to="/">
        <v-avatar>
          <img src="../assets/exlogo.png" alt="Logo" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class=""
      dark
      color=" dark darken-4"
    >
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
  name: "adminLayout",
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "DASHBOARD",
          icon: "mdi-home",
          to: "/dashboard",
        },
        {
          title: "MANAGE PRODUCTS",
          icon: "mdi-clipboard-list",
          to: "/manage_products",
        },
        {
          title: "MANAGE CATEGORIES",
          icon: "mdi-label",
          to: "/manage_category",
        },
        {
          title: "POSTS APPROVAL",
          icon: "mdi-alert-decagram",
          to: "/post_approval",
        },
        {
          title: "ORDERED ITEMS",
          icon: "mdi-order-bool-ascending",
          to: "/ordered_items",
        },
        // {
        //   title: "DELAIED PRODUCTS",
        //   icon: "mdi-order-bool-ascending",
        //   to: "/delaied_products",
        // },
        {
          title: "REGISTERED CUSTOMERS",
          icon: "mdi-clipboard-account",
          to: "/registered_customers",
        },
        {
          title: "ADVERTISEMENTS CONFIG",
          icon: "mdi-postage-stamp",
          to: "/advertisements_config",
        },
        { title: "SETTINGS", icon: "mdi-cog", to: "/settings" },
        { title: "LOGOUT", icon: "mdi-logout", to: "/logout" },
      ],
      right: null,
    };
  },
};
</script>
