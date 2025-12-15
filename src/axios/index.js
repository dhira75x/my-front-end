import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');

export const getDispatches = async (filter = {}, paginate = {}) => {
    const response = await axios.get(`${API_BASE_URL}/dispatches`, {
        params: { filter, paginate },
    });
    return response.data;
};

export const getDispatchById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/dispatches/${id}`);
    return response.data;
};

export const getDispatchByUserId = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/dispatch-user/${userId}`);
    return response.data;
};

export const createDispatch = async (userId) => {
    const response = await axios.post(`${API_BASE_URL}/dispatches`, { userId });
    return response.data;
};

export const deleteDispatch = async (id) => {
    await axios.delete(`${API_BASE_URL}/dispatches/${id}`);
};

export const updateDispatchById = async (id, updates) => {
    const response = await axios.put(`${API_BASE_URL}/dispatches/${id}`, updates);
    return response.data;
};

export const updateDispatchByUserId = async (userId, updates) => {
    const response = await axios.put(`${API_BASE_URL}/dispatch-user/${userId}`, updates);
    return response.data;
};
