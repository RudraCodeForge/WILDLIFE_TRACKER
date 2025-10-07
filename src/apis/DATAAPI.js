import api from "./axios"
export const ProfileData = async (token) => {
  const res = await api.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
