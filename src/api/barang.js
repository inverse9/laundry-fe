import axios from "axios";

const API_URL = "http://localhost:3000/barang";

export const getBarang = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("No response received from the server.");
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};

export const createBarang = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateBarang = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const deleteBarang = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};