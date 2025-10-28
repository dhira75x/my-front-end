import { createRouter, createWebHistory } from "vue-router";
// import Caroul from '../components/molecules/Slider/caroul.vue'
import LandingPage from "@/views/landing/landing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/user-login",
      name: "user-login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/help-page",
      name: "help-page",
      component: () => import("../components/pages/helpPage.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../components/pages/faq.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/molecules/contact.vue"),
    },
    {
      path: "/dispatch-login",
      name: "dispatch-login",
      component: () => import("../components/pages/dispatch/login.vue"),
    },
    {
      path: "/vendor-login",
      name: "vendor-login",
      component: () => import("../components/pages/profile/vendor/login.vue"),
    },
    {
      path: "/vendor-reg",
      name: "vendor-reg",
      component: () =>
        import("../components/pages/profile/vendor/vendor-reg.vue"),
    },
    {
      path: "/user-reg",
      name: "user-reg",
      component: () => import("../views/registration.vue"),
    },
    {
      path: "/dispatch-reg",
      name: "dispatch-reg",
      component: () => import("../components/pages/dispatch/register.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/pages/cart/cart.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../components/pages/checkout/checkout.vue"),
    },
    {
      path: "/order-confirmation",
      name: "order-confirmation",
      component: () =>
        import("../components/pages/order/order-confirmation.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../components/pages/category/Category.vue"),
    },
    {
      path: "/electronics",
      name: "electronics",
      component: () => import("../components/pages/category/Electronics.vue"),
    },
    {
      path: "/beauty",
      name: "beauty",
      component: () => import("../components/pages/category/Beauty.vue"),
    },
    {
      path: "/fashion",
      name: "fashion",
      component: () => import("../components/pages/category/Fashion.vue"),
    },
    {
      path: "/grocery-drinks",
      name: "grocery-drinks",
      component: () =>
        import("../components/pages/category/GrocreiesDrinks.vue"),
    },
    {
      path: "/home-kitchen",
      name: "home-kitchen",
      component: () => import("../components/pages/category/HomeKitchen.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../components/pages/Product/product.vue"),
    },
    {
      path: "/transaction",
      name: "transaction",
      component: () =>
        import("../views/Authentication/payment/transaction.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/Authentication/ForgotPassword.vue"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../views/Authentication/ResetPassword.vue"),
    },
  ],
});

export default router;
