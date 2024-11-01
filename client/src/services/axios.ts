import axios from "axios";
const API_URL = "/api/";

export const axiosInstance = axios.create({ baseURL: API_URL });
