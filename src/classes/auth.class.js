import { http } from "../util/https";

export class Auth {
    async login(email, password) {
        try {
            const response = await http.post("/auth/login/merchants", { email, password });

            const data = response.data;
            const token = data?.token || data?.accessToken || data?.access_token || data?.payload?.key || data?.payload?.accessToken;

            if (token) {
                http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
            return data;
        } catch (error) {
            console.error("Error during merchant login:", error);
            throw error;
        }
    }

    async whoami() {
        try {
            const response = await http.get("/auth/whoami");
            return response.data;
        } catch (error) {
            console.error("Error fetching user info:", error);
            throw error;
        }
    }

    async refreshToken() {
        try {
            const response = await http.post("/auth/refresh");
            return response.data;
        } catch (error) {
            console.error("Error refreshing token:", error);
            throw error;
        }
    }

    async logout() {
        try {
            await http.post("/auth/logout");
            delete http.defaults.headers.common['Authorization'];
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    }
}
