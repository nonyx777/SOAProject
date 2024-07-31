import axios from 'axios';

const API_BASE_URL = 'http://0.0.0.0:8001';

export const getProducts = async (skip = 0, limit = 10) => {
    const response = await axios.get(`${API_BASE_URL}/products/`, {
        params: { skip, limit },
    });
    return response.data;
};

export const getProduct = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_BASE_URL}/products/`, {
    product,
  });
  return response.data;
};
