import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// Auth APIs (mock implementation)
const MOCK_USER = {
  id: 1,
  name: "Rahima",
  email: "rahima@gmail.com"
};

export const login = async (email: string, password: string) => {
  if (email === "rahima@gmail.com" && password === "12345") {
    return {
      token: "mock_token_12345",
      user: MOCK_USER
    };
  }
  throw new Error("Invalid credentials");
};

export const register = async (name: string, email: string, password: string) => {
  return {
    id: 1,
    message: "Registration successful"
  };
};
