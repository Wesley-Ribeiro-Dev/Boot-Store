import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function saveOrder(body, token) {
  const config = createConfig(token);

  const promise = axios.post(
    `${VITE_API_URL}/checkout`,
    body,
    config
  );

  return promise;
}

const api = {
    saveOrder
}

export default api;