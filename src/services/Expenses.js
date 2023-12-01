import axios from "axios";

const BASE_URL_API = "https://usahaoptima-api.sengked.com/api/v1";

const CreateExpenses = async (data) => {
  try {
    const url = `${BASE_URL_API}/expenses`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getExpensesItem = async () => {
  try {
    const url = `${BASE_URL_API}/expenses`;
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateExpensesItem = async (id, expenses) => {
  try {
    const url = `${BASE_URL_API}/expenses/${id}`;
    const response = await axios.put(url, expenses);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteExpensesItem = async (id) => {
  try {
    const url = `${BASE_URL_API}/expenses/${id}`;
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {
  CreateExpenses,
  getExpensesItem,
  updateExpensesItem,
  deleteExpensesItem,
};
