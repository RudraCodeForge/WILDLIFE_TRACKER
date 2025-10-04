import { configureStore, createSlice } from "@reduxjs/toolkit";

// SignUp slice
const SignUpSlice = createSlice({
  name: "SignUp",
  initialState: {
    isLoggedIn: false,
    Role: "user",
  },
  reducers: {
    SignUp: (state, action) => {
      state.Status = true;
      state.Role = action.payload?.role || "user";
    },
    Logout: (state) => {
      state.Status = false;
      state.Role = "user";
    },
  },
});

// Reports Slice
const Reports = createSlice({
  name: "Reports",
  initialState: {
    Report: [
      "Species Population",
      "Environmental Impact",
      "Camera Trap Summary",
      "Human Wildlife Conflicts",
      "Health & Mortality",
      "Habitat Usage",
      "Species Movement",
      "Sighting Report",
    ],
    Species: ["Lion", "Tiger", "Elephant", "Leopard", "Deer", "Peacock"],
    Conservational_Status: [
      "All Status",
      "Endangered",
      "Vulnerable",
      "Critically Endangered",
    ],
    Format: ["PDF", "CSV", "EXCEL", "JSON"],
  },
  reducers: {},
});

//Login Slice 
const Login = createSlice({
  name: "Login",
  initialState: {
    Token: localStorage.getItem("Token") || null,
    //isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    Role: localStorage.getItem("Role") || null,
    //User: JSON.parse(localStorage.getItem("User")) || {},
    adminLinks: [
      { to: "/admin/dashboard", label: "Admin Dashboard" },
      { to: "/admin/manage-users", label: "Manage Users" },
      { to: "/admin/reports", label: "Reports" },
      { to: "/admin/profile", label: "Profile" },
      { to: "/admin/species", label: "Species" },
    ],
    userLinks: [
      { to: "/", label: "Home" },
      { to: "/dashboard", label: "Dashboard" },
      { to: "/species", label: "Species" },
      { to: "/aboutus", label: "About Us" },
      { to: "/contactus", label: "Contact Us" },
      {
        to: "/profile",
        label: "Profile",
        paths: [
          "/profile",
          "/profile/tracked-animals",
          "/profile/missions",
          "/profile/overview",
        ],
      },
    ],
  },
  reducers: {
    login: (state, action) => {
      state.Token = action.payload.Token;
      state.Role = action.payload.Role;
      localStorage.setItem("Token", action.payload.Token);
      localStorage.setItem("Role", action.payload.Role);
    },
    logout: (state) => {
      state.Token = null;
      state.Role = null;
      localStorage.removeItem("Token")
      localStorage.removeItem("Role");
    },
  },
});
// Configure store
const WildLifeStore = configureStore({
  reducer: {
    SignUp: SignUpSlice.reducer,
    Reports: Reports.reducer,
    Login: Login.reducer
  },
});

export const { login } = Login.actions;
export const { SignUp, Logout } = SignUpSlice.actions;
export default WildLifeStore;
