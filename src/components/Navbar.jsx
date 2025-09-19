import styles from "../styles/Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const status = true;
  const role = "user";
  const location = useLocation().pathname;

  const renderLinks = () => {
    if (!status) {
      return (
        <div className="navbar-nav">
          <Link
            className={`nav-link text-center 
              ${styles.login} 
              ${location === "/login" ? styles.Active : ""}`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`nav-link text-center
              ${styles.signup} 
              ${location === "/signup" ? styles.Active : ""}`}
            to="/signup"
          >
            Join our mission
          </Link>
        </div>
      );
    }

    switch (role) {
      case "user":
        return (
          <div className="navbar-nav">
            <Link
              className={`nav-link text-center mt-3
                ${styles.Links}
                ${location === "/" ? styles.Active : ""}`}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link 
              ${styles.Links}
              ${location === "/dashboard" ? styles.Active : ""}`}
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={`nav-link 
              ${styles.Links} 
              ${location === "/species" ? styles.Active : ""}`}
              to="/species"
            >
              Species
            </Link>
            <Link
              className={`nav-link
              ${styles.Links} 
              ${location === "/contactus" ? styles.Active : ""}`}
              to="/contactus"
            >
              Contact Us
            </Link>

            <Link
              className={`nav-link text-center mt-3
                ${styles.Links}`}
              to="/profile"
            >
              Profile
            </Link>
          </div>
        );

      case "admin":
        return (
          <div className="navbar-nav">
            <Link
              className={`nav-link ${location === "/admin/dashboard" ? styles.Active : ""}`}
              to="/admin/dashboard"
            >
              Admin Panel
            </Link>
            <Link
              className={`nav-link ${location === "/admin/reports" ? styles.Active : ""}`}
              to="/admin/reports"
            >
              Reports
            </Link>
            <Link
              className={`nav-link ${location === "/admin/species" ? styles.Active : ""}`}
              to="/admin/species"
            >
              Species List
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            alt="Logo"
            width="24"
            height="24"
            className="d-inline-block align-text-top"
          />
          Wildlife Tracker
        </a>
        <button
          className={`navbar-toggler ${styles.Hamburger}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {renderLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
