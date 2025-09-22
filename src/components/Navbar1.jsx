import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import styles from "../styles/Navbar1.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const status = true;
  const Location = useLocation().pathname;

  return (
    <div
      className={`bg-dark ${styles.Navbar1} ${isOpen ? styles.expanded : ""}`}
    >
      <div className={styles.NavbarTop}>
        {/* Logo Left */}
        <div className={styles.LogoCon}>
          <img src="/logo.png" alt="logo" width="30" height="30" />
          <p className={styles.LogoText}>Wildlife Tracker</p>
        </div>

        {/* Center Links (for Desktop) */}
        {status ? (
          <>
            <div className={styles.LaptopLinks}>
              <Link
                to="/"
                className={`${styles.LLink} ${Location === "/" ? styles.LActive : ""}`}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`${styles.LLink} ${Location === "/dashboard" ? styles.LActive : ""}`}
              >
                Dashboard
              </Link>
              <Link
                to="/species"
                className={`${styles.LLink} ${Location === "/species" ? styles.LActive : ""}`}
              >
                Species
              </Link>
              <Link
                to="/contactus"
                className={`${styles.LLink} ${Location === "/species" ? styles.LActive : ""}`}
              >
                Contact Us
              </Link>
            </div>

            {/* Profile Right */}
            <div className={styles.ProfileCon}>
              <Link to="/profile">
                <img
                  src="/me.jpg"
                  alt="profile"
                  width="30"
                  height="30"
                  className={styles.ProfileImg}
                />
              </Link>
              <Link to="/alerts" className={styles.Alert}>
                <FaRegBell size={24}/>
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.ProfileCon}>
            <Link to="/signup" className={styles.Signup}>
              Join Our Mission
            </Link>
            <Link to="/login" className={styles.Login}>
              Login
            </Link>
          </div>
        )}

        {/* Hamburger (for Mobile) */}
        <div
          className={`${styles.Hamburger} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className={styles.LinksCon}>
          {status ? (
            <>
              <Link
                to="/"
                className={`${styles.Link} ${Location === "/" ? styles.Active : ""}`}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`${styles.Link} ${Location === "/dashboard" ? styles.Active : ""}`}
              >
                Dashboard
              </Link>
              <Link
                to="/species"
                className={`${styles.Link} ${Location === "/species" ? styles.Active : ""}`}
              >
                Species
              </Link>
              <Link
                to="/contactus"
                className={`${styles.Link} ${Location === "/contactus" ? styles.Active : ""}`}
              >
                Contact Us
              </Link>
              <Link
                to="/profile"
                className={`
                ${styles.Link} 
                ${["/profile", "/profile/tracked-animals", "/profile/missions", "/profile/overview"].includes(Location) ? styles.Active : ""}`}

              >
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`${styles.Link} ${Location === "/login" ? styles.Active : ""}`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${styles.Link} ${Location === "/signup" ? styles.Active : ""}`}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar1;
