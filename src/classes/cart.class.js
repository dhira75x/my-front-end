import { http } from "../util/https";

export class Cart {
    /**
     * Fetch cart details by cart ID
     * @param {string} cartId 
     */
    async getCart(cartId) {
        try {
            const response = await http.get(`/carts/${cartId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching cart:", error);
            throw error;
        }
    }

    /**
     * Add product(s) to the user's cart
     * @param {string} userId 
     * @param {string|string[]} productId 
     * @param {number} quantity 
     */
    async addToCart(userId, productId, quantity = 1) {
        console.log("userId", userId, "productId", productId, "quantity", quantity);
        try {
            const payload = typeof productId === 'string'
                ? { productId, quantity }
                : { productIds: productId };
            const response = await http.patch(`/carts/${userId}/add`, payload);
            return response.data;
        } catch (error) {
            console.error("Error adding to cart:", error);
            throw error;
        }
    }

    /**
     * Remove product(s) from the user's cart
     * @param {string} userId 
     * @param {string[]} productIds 
     */
    async removeFromCart(userId, productIds) {
        try {
            const response = await http.patch(`/carts/${userId}/remove`, { productIds });
            return response.data;
        } catch (error) {
            console.error("Error removing from cart:", error);
            throw error;
        }
    }

    /**
     * Reset/Empty the user's cart
     * @param {string} userId 
     */
    async resetCart(userId) {
        try {
            const response = await http.patch(`/carts/${userId}/reset`);
            return response.data;
        } catch (error) {
            console.error("Error resetting cart:", error);
            throw error;
        }
    }
}
