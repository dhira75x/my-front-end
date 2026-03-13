import { defineStore } from 'pinia';
import { Cart } from '@/classes/cart.class';
import { useUserStore } from '@/stores/userStore';

import Swal from 'sweetalert2';

const cartService = new Cart();

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    loading: false,
    loadingItems: {}, // Track loading state for individual items: { productId: boolean }
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
    async updateCartItems(newItems) {
      if (!newItems) return;

      // Smart Merge: Map over new items and preserve existing metadata (like images) if IDs match
      this.cartItems = newItems.map(newItem => {
        const existingItem = this.cartItems.find(i => i.productId?._id === newItem.productId?._id);
        if (existingItem) {
          return {
            ...newItem,
            productId: {
              ...newItem.productId,
              img: existingItem.productId?.img // Keep the images we already have
            }
          };
        }
        return newItem;
      });
    },

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
        const response = await cartService.addToCart(userStore.user._id, productId, quantity);
        if (response.status === 'OK') {
          await this.updateCartItems(response.payload.items);
        } else {
          await this.initializeCart();
        }

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

      this.loadingItems[productId] = true;
      // Optimistic UI update — decrement or remove immediately
      const itemIndex = this.cartItems.findIndex(i => i.productId?._id === productId);
      const previousItems = JSON.parse(JSON.stringify(this.cartItems)); // snapshot for rollback
      if (itemIndex !== -1) {
        const item = this.cartItems[itemIndex];
        if (item.count <= 1) {
          this.cartItems.splice(itemIndex, 1); // remove entirely
        } else {
          item.count--; // just decrement
        }
      }

      try {
        const response = await cartService.removeFromCart(userStore.user._id, [productId]);
        if (response.status === 'OK') {
          await this.updateCartItems(response.payload.items);
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
        this.cartItems = previousItems; // revert on failure
      } finally {
        delete this.loadingItems[productId];
      }
    },

    // Remove ALL items of a specific product (delete from cart entirely)
    async removeAllOfProduct(productId) {
      // Optimistically remove from UI immediately
      const previousItems = JSON.parse(JSON.stringify(this.cartItems));
      this.cartItems = this.cartItems.filter(item => item.productId?._id !== productId);

      const userStore = useUserStore();
      if (!userStore.isAuthenticated) return;

      try {
        const response = await cartService.removeAllFromCart(userStore.user._id, [productId]);
        if (response.status === 'OK') {
          await this.updateCartItems(response.payload.items);
        }
      } catch (error) {
        console.error("Error removing all of product from cart:", error);
        this.cartItems = previousItems; // revert on failure
        await this.initializeCart(); // re-sync on error
      }
    },

    // Add one more of an item already in cart
    async addOneToCart(productId) {
      const userStore = useUserStore();
      if (!userStore.isAuthenticated) return;

      this.loadingItems[productId] = true;
      // Optimistic UI update
      const item = this.cartItems.find(i => i.productId?._id === productId);
      if (item) item.count++;

      try {
        const response = await cartService.addToCart(userStore.user._id, productId, 1);
        if (response.status === 'OK') {
          await this.updateCartItems(response.payload.items);
        }
      } catch (error) {
        console.error("Error adding one to cart:", error);
        if (item) item.count--; // revert optimistic update
      } finally {
        delete this.loadingItems[productId];
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
      } catch (error) {
        console.error("Error resetting cart on backend:", error);
      }
    }
  },
});