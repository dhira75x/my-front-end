import axios from 'axios'

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized errors
        if (error.response?.status === 401 && !originalRequest._retry) {
            // Avoid infinite loop if login or refresh itself fails with 401
            if (originalRequest.url.includes('/auth/login') || originalRequest.url.includes('/auth/refresh')) {
                return Promise.reject(error);
            }

            originalRequest._retry = true;
            try {
                console.log('[http] Access token expired, attempting refresh...');
                const response = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
                    {},
                    { withCredentials: true }
                );

                const data = response.data;
                const newToken = data?.token || data?.accessToken || data?.access_token || data?.payload?.accessToken || data?.payload?.key;

                if (newToken) {
                    console.log('[http] Refresh successful, retrying original request.');
                    http.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return http(originalRequest);
                }
            } catch (refreshError) {
                console.warn('[http] Refresh failed, user session expired.');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);
