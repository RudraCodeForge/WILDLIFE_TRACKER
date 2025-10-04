import api from "./axios";

// Api for login
export const loginUser = async (username, password) => {
  const res = await api.post("/auth/login", {
    username,
    password,
    expiresInMins: 60, // optional
  });
  return res.data;
};

// Api for signup
export const SignupUser = async (formData) => {
  const res = await api.post("/auth/register", formData); // ✅ yaha formData direct bhejna hai
  return res.data;
};

export const Verify = async (id) => {
  const res = await api.post("/auth/verify",{id}); 
  return res.data;
};