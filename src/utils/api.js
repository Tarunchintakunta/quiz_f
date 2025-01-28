import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-wexa.onrender.com", // Update with your backend URL
});

export const signup = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData); // Correct POST request
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
