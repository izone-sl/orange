import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import AllProducts from "../views/AllProducts.vue";

// import adminLayout from "../views/admin/adminLayout.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import ManageProducts from "../views/admin/ManageProducts.vue";

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
    name: "Dashboard",
    component: Dashboard,
  }, {
    path: "/manage_products",
    name: "ManageProducts",
    component: ManageProducts,
  },
   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
