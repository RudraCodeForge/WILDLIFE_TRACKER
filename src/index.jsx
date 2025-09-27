import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Forget_Passward from "./components/Forget_Passward";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
import SpeciesList from "./components/SpeciesList";
import Profile from "./components/Profile";
import { FetchProfile } from "./components/Profile";
import TrackedAnimals from "./components/TrackedAnimals";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import {ActivityData} from "./components/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import UserList from "./components/UserList";
import Reports from "./components/Reports";
import {Users} from "./components/UserList";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/forget_password",
        element: <Forget_Passward />
      },
      {
        path: "/termsandcondition",
        element: <TermsAndCondition />
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/species",
        element: <SpeciesList />
      },
      {
        path:"/profile",
        element: <Profile />,
        children:[
          {
            path:"/profile",
            element: <Overview/>
          },
          {
            path:"/profile/overview",
            element: <Overview/>
          },
          {
            path:"/profile/tracked-animals",
            element: <TrackedAnimals/>
          },
          {
            path:"/profile/missions",
            element: <TrackedAnimals/>
          }
        ]
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },
      {
        path:"/aboutus",
        element: <AboutUs/>
      },
      {
        path:"/admin/profile",
        element: <Profile/>,
        loader: FetchProfile,
      },
      {
        path: "/admin/species",
        element: <SpeciesList />
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard/>,
        loader:ActivityData,
      },
      {
        path: "/admin/manage-users",
        element: <UserList/>,
        loader:Users,
      },
      {
        path: "/admin/reports",
        element: <Reports />
      },
    ],
  },
  {
    path: "*", // This is the wildcard path
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
