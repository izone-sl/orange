import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import AllProducts from "../views/AllProducts.vue";

// import adminLayout from "../views/admin/adminLayout.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import ManageProducts from "../views/admin/ManageProducts.vue";
import ManageCategory from "../views/admin/ManageCategory.vue";
import PostApproval from "../views/admin/PostApproval.vue";
import OrderedItems from "../views/admin/OrderedItems.vue";
import RegisteredCustomers from "../views/admin/RegisteredCustomers.vue";
import AdsConfig from "../views/admin/AdsConfig.vue";
import Settings from "../views/admin/Settings.vue";

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
  },
  {
    path: "/manage_products",
    name: "ManageProducts",
    component: ManageProducts,
  },
  {
    path: "/manage_category",
    name: "ManageCategory",
    component: ManageCategory,
  },
  {
    path: "/post_approval",
    name: "PostApproval",
    component: PostApproval,
  },
  {
    path: "/ordered_items",
    name: "OrderedItems",
    component: OrderedItems,
  },
  {
    path: "/registered_customers",
    name: "RegisteredCustomers",
    component: RegisteredCustomers,
  },
    {
    path: "/advertisements_config",
    name: "AdsConfig",
    component: AdsConfig,
  }, {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
