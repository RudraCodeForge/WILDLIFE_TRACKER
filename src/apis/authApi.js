import api from "./axios";

export const loginUser = async (username, password) => {
  const res = await api.post("/user/login", {
    username,
    password,
    expiresInMins: 60, // optional
  });
  return res.data;
};