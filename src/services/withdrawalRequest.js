
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/withdrawals';

export default {
  async getWithdrawals(paginationOptions) {
    const response = await axios.get(API_URL, { params: paginationOptions });
    return response.data;
  },
  
  async findWithdrawal(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },
  
  async registerWithdrawal(withdrawalData) {
    const response = await axios.post(API_URL, withdrawalData);
    return response.data;
  },
  
  async deleteWithdrawal(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; // Might not return data if there's nothing to return upon deletion
  },
  
  async updateWithdrawalStatusUsingId(id, updates) {
    const response = await axios.patch(`${API_URL}/${id}`, updates);
    return response.data;
  },
};
