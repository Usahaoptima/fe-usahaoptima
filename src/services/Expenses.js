import axios from "axios";

const BASE_URL_API = "https://usahaoptima-api.sengked.com/api/v1";

function getAuthTokenFromCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "access_token") {
      return value;
    }
  }
  return null;
}

const authToken = getAuthTokenFromCookies();

const CreateExpenses = async (data) => {
  try {
    const url = `${BASE_URL_API}/expenses`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getExpensesItem = async () => {
  try {
    const url = `${BASE_URL_API}/expenses`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateExpensesItem = async (id, expenses) => {
  try {
    const url = `${BASE_URL_API}/expenses/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.put(url, expenses, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteExpensesItem = async (id) => {
  try {
    const url = `${BASE_URL_API}/expenses/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.delete(url, config);
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
