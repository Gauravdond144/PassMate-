import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/items`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
