import { http } from "../util/https";

export class Order {
    /**
     * Create a new order document
     * @param {string} userId 
     * @param {{id: string, count: number}[]} items 
     * @param {object} shippingAddress 
     * @param {string} shippingMethod 
     * @param {string} paymentMethod 
     */
    async createOrder(userId, items, shippingAddress, shippingMethod, paymentMethod) {
        try {
            const response = await http.post("/orders", {
                userId,
                items,
                shippingAddress,
                shippingMethod,
                paymentMethod
            });
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    }

    /**
     * Complete order process (after payment)
     * @param {string} orderId 
     */
    async completeOrder(orderId,reference) {
        try {
            const response = await http.post("/orders/complete", { orderId,reference });
            return response.data;
        } catch (error) {
            console.error("Error completing order:", error);
            throw error;
        }
    }

    /**
     * Fetch user orders
     */
    async getOrders() {
        try {
            const response = await http.get("/orders");
            return response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }
    }

    /**
     * Find order details by ID
     * @param {string} orderId 
     */
    async findOrder(orderId) {
        try {
            const response = await http.get(`/orders/${orderId}`);
            return response.data;
        } catch (error) {
            console.error("Error finding order:", error);
            throw error;
        }
    }
}
