import axios from "axios";

export const apiStrapi = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_URL,
});
