import axios from "axios";

export const API_URL = "https://fake-api-nabook.glitch.me/";

export const axiosInstance = axios.create({baseURL: API_URL});