import axios, { AxiosInstance } from "axios";
const IS_PROD: boolean = true;
let API_URL: string = "/api/";

if (IS_PROD) {
  API_URL = "/api/";
} else {
  API_URL = "http://localhost:5001/api";
}

export const axiosInstance: AxiosInstance = axios.create({ baseURL: API_URL });
