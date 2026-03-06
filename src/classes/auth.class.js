import { http } from "../util/https";

export class Auth {
    async login(email, password, type = 'users') {
        try {
            const response = await http.post(`/auth/login/${type}`, { email, password }, { withCredentials: true });

            const data = response.data;
            const token = data?.token || data?.accessToken || data?.access_token || data?.payload?.key || data?.payload?.accessToken;

            if (token) {
                http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
            return data;
        } catch (error) {
            console.error(`Error during ${type} login:`, error);
            throw error;
        }
    }

    async register(userData, endpoint = 'users') {
        try {
            const response = await http.post(`/${endpoint}`, userData, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error(`Error during ${endpoint} registration:`, error);
            throw error;
        }
    }

    async whoami() {
        try {
            const response = await http.get("/auth/whoami", { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error fetching user info:", error);
            throw error;
        }
    }

    async refreshToken() {
        try {
            const response = await http.post("/auth/refresh", {}, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error refreshing token:", error);
            throw error;
        }
    }

    async logout() {
        try {
            await http.post("/auth/logout", {}, { withCredentials: true });
            delete http.defaults.headers.common['Authorization'];
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    }

    async updateProfile(userId, userData) {
        try {
            const response = await http.patch(`/users/${userId}`, userData, { withCredentials: true });
            return response.data;
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        }
    }
}
