import axios from "axios";

const API = axios.create({
    baseURL: "http://194.233.84.108:9003",
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
