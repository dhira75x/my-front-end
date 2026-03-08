import { defineStore } from 'pinia';
import { Cart } from '@/classes/cart.class';
import { useUserStore } from '@/stores/userStore';

import Swal from 'sweetalert2';

const cartService = new Cart();

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    loading: false,
    error: null,
  }),
  getters: {
    totalItems: (state) => state.cartItems.reduce((acc, item) => acc + (item.count || 1), 0),
    cartTotal: (state) => state.cartItems.reduce((acc, item) => {
      const price = item.productId?.price || 0;
      return acc + (price * (item.count || 1));
    }, 0),
  },
  actions: {
    async initializeCart() {
      const userStore = useUserStore();
      if (!userStore.isAuthenticated || !userStore.cartId) {
        this.cartItems = [];
        return;
      }

      this.loading = true;
      try {
        const response = await cartService.getCart(userStore.cartId);
        if (response.status === 'OK') {
          this.cartItems = response.payload.items || [];
        }
      } catch (error) {
        this.error = 'Failed to load cart';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async addToCart(productId, quantity = 1, productData = null) {
      const userStore = useUserStore();
      if (!userStore.isAuthenticated) {
        Swal.fire({
          icon: 'warning',
          title: 'Authentication Required',
          text: 'Please login to add items to your cart',
          confirmButtonColor: '#40826D'
        });
        return;
      }

      // Check stock if productData or existing cartItems have stock info
      const existingItem = this.cartItems.find(item => item.productId?._id === productId);
      const currentCount = existingItem ? existingItem.count : 0;
      const stock = productData?.stock ?? existingItem?.productId?.stock;

      if (stock !== undefined && currentCount + quantity > stock) {
        Swal.fire({
          icon: 'error',
          title: 'Limit Reached',
          text: `Maximum amount reached! Only ${stock} items available in stock, and you already have ${currentCount} in your cart.`,
          confirmButtonColor: '#40826D'
        });
        return;
      }

      try {
        this.loading = true;
        await cartService.addToCart(userStore.user._id, productId, quantity);
        await this.initializeCart(); // Refresh cart from backend

        Swal.fire({
          icon: 'success',
          title: 'Added to Cart',
          text: 'Item has been added to your cart successfully.',
          timer: 2000,
          showConfirmButton: false,
          toast: true,
          position: 'top-end'
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response?.data?.msg || 'Failed to add item to cart.',
          confirmButtonColor: '#40826D'
        });
      } finally {
        this.loading = false;
      }
    },

    async removeFromCart(productId) {
      const userStore = useUserStore();
      if (!userStore.isAuthenticated) return;

      try {
        await cartService.removeFromCart(userStore.user._id, [productId]);
        await this.initializeCart();
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    },

    async emptyCart() {
      // Clear locally first for immediate UI update
      this.cartItems = [];

      const userStore = useUserStore();
      if (!userStore.isAuthenticated) {
        return;
      }

      try {
        await cartService.resetCart(userStore.user._id);
        console.log("Cart reset on backend for user:", userStore.user._id);
      } catch (error) {
        console.error("Error resetting cart on backend:", error);
      }
    }
  },
});