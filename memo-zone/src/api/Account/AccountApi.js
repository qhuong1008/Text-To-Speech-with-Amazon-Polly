import { axiosInstance } from "../types/axios";

const getAccounts = async () => {
  return await axiosInstance.get("/api/accounts");
};

const getAccountById = async (accountId) => {
  return await axiosInstance.get(`/api/accounts/${accountId}`);
};

const addAccount = async (account) => {
  return await axiosInstance.post("/api/accounts", account);
};

const updateAccountById = async (account, accountId) => {
  return await axiosInstance.post(`/api/accounts/${accountId}`, account);
};

const deleteAccountById = async (accountId) => {
  return await axiosInstance.delete(`/api/accounts/${accountId}`);
};
export {
  getAccounts,
  getAccountById,
  addAccount,
  updateAccountById,
  deleteAccountById,
};
