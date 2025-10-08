import api from "./axios";

export const loginUser = async (username, password) => {
  const res = await api.post("/auth/login", {
    username,
    password,
    expiresInMins: 60, 
  });
  return res.data;
};

export const SignupUser = async (formData) => {
  const res = await api.post("/auth/register", formData); // ✅ yaha formData direct bhejna hai
  return res.data;
};

export const Verify = async (token) => {
  const res = await api.get("/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const Email_Verification = async (token) => {
  try {
    const res = await api.get(`/auth/email-verification/${token}`);
    return res.data;
  } catch (error) {
    console.error("Verification failed:", error.response?.data || error.message);
    throw error; 
  }
};

// Ye function access token ko refresh karke return karega
export const refreshTokenFunc = async () => {
  try {
    const res = await api.post("/auth/refresh", {}, { credentials: "include" });
    const newToken = res.data.accessToken;
    localStorage.setItem("Token", newToken);
    return newToken;
  } catch (err) {
    console.error("Refresh token failed:", err);
    localStorage.removeItem("accessToken");
    window.location.href = "/login"; // redirect to login if refresh fails
    throw err;
  }
};
