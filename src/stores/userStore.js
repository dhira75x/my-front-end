import { defineStore } from 'pinia'
import router from '../router/index'
import { Auth } from '@/classes/auth.class'

const auth = new Auth()

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    token: null, // Keep for legacy if needed, but vendor store relies on whoami
    cartId: null
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {
    async checkAuth() {
      try {
        this.loading = true;
        const data = await auth.whoami();
        this.user = data.payload;
        this.isAuthenticated = true;

        // Populate cartId if present in payload
        if (data.payload?.cartId) {
          this.cartId = data.payload.cartId;
        }

        // Maintain name compatibility
        if (this.user && !this.user.names && this.user.firstname && this.user.lastname) {
          this.user.names = `${this.user.firstname} ${this.user.lastname}`;
        }
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;
        this.cartId = null;
      } finally {
        this.loading = false;
      }
    },

    async login(email, password, type = 'users') {
      try {
        this.loading = true;
        const loginData = await auth.login(email, password, type);

        // After successful login, fetch the full user profile
        const userData = await auth.whoami();
        this.user = userData.payload;
        this.isAuthenticated = true;

        if (userData.payload?.cartId) {
          this.cartId = userData.payload.cartId;
        }

        // Maintain name compatibility
        if (this.user && !this.user.names && this.user.firstname && this.user.lastname) {
          this.user.names = `${this.user.firstname} ${this.user.lastname}`;
        }

        return userData;
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async register(userData, type = 'users') {
      try {
        this.loading = true;
        return await auth.register(userData, type);
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        await auth.logout();
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        this.user = null;
        this.isAuthenticated = false;
        this.cartId = null;
        this.token = null;
        localStorage.removeItem('userStore')
        router.push({ name: 'user-login' })
      }
    },

    // Simplified whoami (checkAuth is the preferred vendor pattern)
    async whoami() {
      console.log("userStore?.user", this.user);
      return await this.checkAuth();
    },

    async updateProfile(userData) {
      if (!this.user?._id) return;
      try {
        console.log("userStore?.user", this.user._id);
        this.loading = true;
        const response = await auth.updateProfile(this.user._id, userData);
        if (response.status === 'OK') {
          this.user = { ...this.user, ...response.payload };
        }
        return response;
      } finally {
        this.loading = false;
      }
    }
  },
  persist: {
    storage: localStorage,
    paths: ['isAuthenticated', 'user', 'cartId'],
  },
})
