import { configureStore, createSlice } from "@reduxjs/toolkit";
import { AiOutlineEnvironment, AiOutlineSafety } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";

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

// Home slice
const Home = createSlice({
  name: "Home",
  initialState: {
    pointsData: [
      {
        ICON: AiOutlineEnvironment,
        TITLE: "Live Tracking",
        DESC: "Real time location tracking of endangered animals.",
      },
      {
        ICON: BiBarChartSquare,
        TITLE: "Data & Insights",
        DESC: "Comprehensive data analysis for informed conservation efforts.",
      },
      {
        ICON: AiOutlineSafety,
        TITLE: "Secure Monitoring",
        DESC: "Advanced security measures to protect animal data and locations.",
      },
    ],
  },
  reducers: {},
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
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
    Role: "admin",
    User: JSON.parse(localStorage.getItem("User")) || {},
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
      state.isLoggedIn = true;
      state.User = action.payload;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("User", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.User = {};
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("User");
    }
  }
});
// Configure store
const WildLifeStore = configureStore({
  reducer: {
    SignUp: SignUpSlice.reducer,
    Home: Home.reducer,
    Reports: Reports.reducer,
    Login: Login.reducer
  },
});

export const { login } = Login.actions;
export const { SignUp, Logout } = SignUpSlice.actions;
export default WildLifeStore;
