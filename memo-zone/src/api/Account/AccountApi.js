import axios from "axios";

const getAccounts = async () => {
  return await axios.get("http://localhost:8090/api/accounts");
};

const getAccountById = async (accountId) => {
  return await axios.get(`http://localhost:8090/api/accounts/${accountId}`);
};

const addAccount = async (account) => {
  return await axios.post("http://localhost:8090/api/accounts", account);
};

const updateAccountById = async (account, accountId) => {
  return await axios.post(
    `http://localhost:8090/api/accounts/${accountId}`,
    account
  );
};

const deleteAccountById = async (accountId) => {
  return await axios.delete(`http://localhost:8090/api/accounts/${accountId}`);
};
export {
  getAccounts,
  getAccountById,
  addAccount,
  updateAccountById,
  deleteAccountById,
};
