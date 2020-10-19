import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import AllProducts from "../views/AllProducts.vue";

import adminLayout from "../views/admin/adminLayout.vue";
import Dashboard from "../views/admin/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "AllProducts",
    component: AllProducts,
  },
  {
    path: "/dashboard",
    name: "adminLayout",
    component: adminLayout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
