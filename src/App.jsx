import "./App.css";
import { Provider } from "react-redux";
import WildLifeStore from "./store/index.js";
import Navbar1 from "./components/Navbar1";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Provider store={WildLifeStore}>
        <Navbar1 />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}
