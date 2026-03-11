
import { http } from '@/util/https';

const ENDPOINT = '/withdrawals';

export default {
  async getWithdrawals(paginationOptions) {
    const response = await http.get(ENDPOINT, { params: paginationOptions });
    return response.data;
  },

  async findWithdrawal(id) {
    const response = await http.get(`${ENDPOINT}/${id}`);
    return response.data;
  },

  async registerWithdrawal(withdrawalData) {
    const response = await http.post(ENDPOINT, withdrawalData);
    return response.data;
  },

  async deleteWithdrawal(id) {
    const response = await http.delete(`${ENDPOINT}/${id}`);
    return response.data;
  },

  async updateWithdrawalStatusUsingId(id, updates) {
    const response = await http.patch(`${ENDPOINT}/${id}`, updates);
    return response.data;
  },
};

