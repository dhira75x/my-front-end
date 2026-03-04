import { http } from "../util/https";

export class Merchant {
    async register(merchantData) {
        try {
            const response = await http.post("/merchants", merchantData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error registering merchant:", error);
            throw error;
        }
    }


    async getMerchant(merchantId) {
        try {
            const response = await http.get(`/merchants/${merchantId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching merchant:", error);
            throw error;
        }
    }

    async getMerchantProducts(merchantId) {
        try {
            const response = await http.get(`/merchants/${merchantId}/products`);
            return response.data;
        } catch (error) {
            console.error("Error fetching merchant products:", error);
            throw error;
        }
    }
}
