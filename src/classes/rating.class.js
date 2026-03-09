import { http } from "../util/https";

export class Rating {
    /**
     * Add a rating for a product
     * @param {string} productId 
     * @param {number} count 1-5
     * @param {string} text 
     * @param {string} createdBy userId
     */
    async addProductRating(productId, count, text, createdBy) {
        try {
            const response = await http.post("/ratings/products", {
                productId,
                count,
                text,
                createdBy
            });
            return response.data;
        } catch (error) {
            console.error("Error adding product rating:", error);
            throw error;
        }
    }

    /**
     * Fetch ratings for a product
     * @param {string} productId 
     */
    async getProductRatings(productId) {
        try {
            const response = await http.get("/ratings/products", {
                params: { productId }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching product ratings:", error);
            throw error;
        }
    }
}
