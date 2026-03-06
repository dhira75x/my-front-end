import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/landing/landing.vue";
import { useUserStore } from "@/stores/userStore";

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
      meta: {
        guestOnly: true,
      },
    },
    {
      path: "/help-page",
      name: "help-page",
      component: () => import("../components/pages/helpPage.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/faqs",
      name: "faq",
      component: () => import("../components/pages/faq.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/track-order",
      name: "track-order",
      component: () => import("../components/pages/track/tracking.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/deals",
      name: "deals",
      component: () => import("../components/pages/Deals.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/return-policy",
      name: "return-policy",
      component: () => import("../components/pages/ReturnPolicy.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../components/pages/PrivacyPolicy.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/refund",
      name: "refund",
      component: () => import("../components/pages/refund/refund.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/molecules/contact.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/dispatch-login",
      name: "dispatch-login",
      component: () => import("../components/pages/dispatch/login.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/vendor-login",
      name: "vendor-login",
      component: () => import("../components/pages/profile/vendor/login.vue"),
      meta: { requiresAuth: true }
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
      meta: { requiresAuth: true }
    },
    {
      path: "/dispatch-reg",
      name: "dispatch-reg",
      component: () => import("../components/pages/dispatch/register.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/pages/cart/cart.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../components/pages/checkout/checkout.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/order-confirmation",
      name: "order-confirmation",
      component: () =>
        import("../components/pages/order/order-confirmation.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/account/orders/:id",
      name: "order-details",
      component: () => import("../components/pages/order/order-details.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../components/pages/category/Category.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/electronics",
      name: "electronics",
      component: () => import("../components/pages/category/Electronics.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/beauty",
      name: "beauty",
      component: () => import("../components/pages/category/Beauty.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/fashion",
      name: "fashion",
      component: () => import("../components/pages/category/Fashion.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/groceries-drinks",
      name: "groceries-drinks",
      component: () =>
        import("../components/pages/category/GrocreiesDrinks.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/home-kitchen",
      name: "home-kitchen",
      component: () => import("../components/pages/category/HomeKitchen.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/sports-outdoors",
      name: "sports-outdoors",
      component: () => import("../components/pages/category/Sports.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/books-media",
      name: "books-media",
      component: () => import("../components/pages/category/BooksMedia.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/toys-games",
      name: "toys-games",
      component: () => import("../components/pages/category/ToysGames.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/automotive",
      name: "automotive",
      component: () => import("../components/pages/category/Automotive.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/health-wellness",
      name: "health-wellness",
      component: () => import("../components/pages/category/Wellness.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/pet-supplies",
      name: "pet-supplies",
      component: () => import("../components/pages/category/PetSupplies.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/office-supplies",
      name: "office-supplies",
      component: () =>
        import("../components/pages/category/OfficeSupplies.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/baby-products",
      name: "baby-products",
      component: () => import("../components/pages/category/BabyProduct.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/jewelry-accessories",
      name: "jewelry-accessories",
      component: () => import("../components/pages/category/Jewelry.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../components/pages/Product/product.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/transaction",
      name: "transaction",
      component: () =>
        import("../views/Authentication/payment/transaction.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/Authentication/ForgotPassword.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../views/Authentication/ResetPassword.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/schedule-shopping",
      name: "schedule-shopping",
      component: () => import("../components/pages/ScheduleShopping.vue"),
      meta: { requiresAuth: true }
    },
  ],
});



router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  const loggedIn = userStore.isAuthenticated
  console.log(loggedIn)

  if (to.meta.requiresAuth && !loggedIn) {
    return next("/user-login");
  }


  if (to.meta.guestOnly && loggedIn) {
    return next("/");
  }

  next();
});


export default router;
