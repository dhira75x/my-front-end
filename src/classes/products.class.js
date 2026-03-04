import { http } from '../util/https';

export class Products {
    /** GET /products — list/filter products */
    async getProducts(params = {}) {
        try {
            const response = await http.get('/products', { params });
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    /** GET /products/:id — single product detail */
    async getProduct(productId) {
        try {
            const response = await http.get(`/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }

    /** GET /products/search — search by title/description */
    async searchProducts(params = {}) {
        try {
            const response = await http.get('/products/search', { params });
            return response.data;
        } catch (error) {
            console.error('Error searching products:', error);
            throw error;
        }
    }
}
