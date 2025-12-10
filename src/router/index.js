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
      path: "/faqs",
      name: "faq",
      component: () => import("../components/pages/faq.vue"),
    },
    {
      path: "/track-order",
      name: "track-order",
      component: () => import("../components/pages/track/tracking.vue"),
    },
    {
      path: "/deals",
      name: "deals",
      component: () => import("../components/pages/Deals.vue"),
    },
    {
      path: "/return-policy",
      name: "return-policy",
      component: () => import("../components/pages/ReturnPolicy.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../components/pages/PrivacyPolicy.vue"),
    },
    {
      path: "/refund",
      name: "refund",
      component: () => import("../components/pages/refund/refund.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/molecules/contact.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
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
      path: "/account/orders/:id",
      name: "order-confirmation",
      component: () => import("../components/pages/order/order-details.vue"),
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
      path: "/groceries-drinks",
      name: "groceries-drinks",
      component: () =>
        import("../components/pages/category/GrocreiesDrinks.vue"),
    },
    {
      path: "/home-kitchen",
      name: "home-kitchen",
      component: () => import("../components/pages/category/HomeKitchen.vue"),
    },
    {
      path: "/sports-outdoors",
      name: "sports-outdoors",
      component: () => import("../components/pages/category/Sports.vue"),
    },
    {
      path: "/books-media",
      name: "books-media",
      component: () => import("../components/pages/category/BooksMedia.vue"),
    },
    {
      path: "/toys-games",
      name: "toys-games",
      component: () => import("../components/pages/category/ToysGames.vue"),
    },
    {
      path: "/automotive",
      name: "automotive",
      component: () => import("../components/pages/category/Automotive.vue"),
    },
    {
      path: "/health-wellness",
      name: "health-wellness",
      component: () => import("../components/pages/category/Wellness.vue"),
    },
    {
      path: "/pet-supplies",
      name: "pet-supplies",
      component: () => import("../components/pages/category/PetSupplies.vue"),
    },
    {
      path: "/office-supplies",
      name: "office-supplies",
      component: () =>
        import("../components/pages/category/OfficeSupplies.vue"),
    },
    {
      path: "/baby-products",
      name: "baby-products",
      component: () => import("../components/pages/category/BabyProduct.vue"),
    },
    {
      path: "/jewelry-accessories",
      name: "jewelry-accessories",
      component: () => import("../components/pages/category/Jewelry.vue"),
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
