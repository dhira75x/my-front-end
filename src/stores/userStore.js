import { defineStore } from 'pinia'
import router from '../router/index'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: null,
    user: null,
    isAuthenticated: false, 
    allowedRoles: [],
    isAdmin: false,
    previousRoute:""
  }),

  actions: {
    updateIsAuthenicated(status) {
      this.isAuthenticated = status   
    },
       hasRole(role) {
      return this.allowedRoles.some((r) => {
        return r.toLowerCase() == role.toLowerCase()
      })
    },
    logout() {
      this.isAuthenticated = false
      this.isAdmin = false 
      this.token = null
      this.user = null
      localStorage.removeItem('userStore')
      router.push({ name: 'login' })
    },
    checkRole() {
      if (
        this.user &&
        this.user.role.toUpperCase() === 'CUSTOMER SUPPORT SUPERVISOR'
      ) {
        this.isAdmin = true 
      }
    },
    userHasRole(role){
      return this.user.role.toLowerCase()===role.toLowerCase();
    }
  },
  persist: {
    storage: localStorage,
    paths: ['isAuthenticated', 'user', 'token','isAdmin', "previousRoute"],
  },
})
