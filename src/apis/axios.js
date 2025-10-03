import axios from "axios";

const api = axios.create({
  baseURL: "https://1f9d7787-007d-4971-b16c-f2c18ecebd01-00-1vlcmhotfp1le.sisko.replit.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;