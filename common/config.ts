import axios from "axios";

export const API_URL = "http://localhost:3000/api";

export const server = axios.create({ baseURL: API_URL });
