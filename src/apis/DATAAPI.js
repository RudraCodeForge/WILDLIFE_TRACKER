import api from "./axios"
/*export const ProfileData = async (token) => {
  const res = await api.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
*/
export const ProfileData = async (token, refreshTokenFunc) => {
  try {
    const res = await api.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
      // to send refresh token cookie if needed
    });
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Access token expired → try refresh
      const newToken = await refreshTokenFunc(); // call refresh API
      const retryRes = await api.get("/profile", {
        headers: { Authorization: `Bearer ${newToken}` },
        withCredentials: true,
      });
      return retryRes.data;
    }
    throw error;
  }
};
