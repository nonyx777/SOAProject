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

export const createProduct = async (
  name, 
  description, 
  image,
  price, 
  amount_left, 
  is_up_for_auction
) => {
  try {
    // Create a JSON payload matching the Postman structure
    const productData = {
      name,
      description,
      image,
      price: parseFloat(price),  // Convert to float
      amount_left: parseInt(amount_left, 10),  // Convert to integer
      is_up_for_auction
    };

    console.log('Sending product data:', productData); // Debugging

    // Send the POST request with the correct headers
    const response = await axios.post(`${API_BASE_URL}/products/`,{
      name,
      description,
      image,
      price,
      amount_left,
      is_up_for_auction,
      headers: {
        'Content-Type': 'application/json',  // Explicit JSON content type
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Failed to create product:', error.response?.data || error.message);
    throw error; // Propagate error for handling in the component
  }
};

