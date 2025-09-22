import "./App.css";
import Navbar1 from "./components/Navbar1";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <Navbar1 />
      <Outlet />
      <Footer/>
    </>
  );
}
