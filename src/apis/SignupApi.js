import api from "./axios";

export const SignupUser = async (formData) => {
  const res = await api.post("/user/add", formData); // ✅ yaha formData direct bhejna hai
  return res.data;
};