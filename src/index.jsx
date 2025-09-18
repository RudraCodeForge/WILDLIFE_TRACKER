import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import NotFound from "./components/NotFound";
import Forget_Passward from "./components/Forget_Passward";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
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
