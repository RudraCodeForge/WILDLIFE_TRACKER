import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import styles from "../styles/Navbar1.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const status = true; // logged in status
  const Role = "admin"; // "user" or "admin"
  const Location = useLocation().pathname;

  // Links for users and admins
  const userLinks = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/species", label: "Species" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contactus", label: "Contact Us" },
    { to: "/profile", label: "Profile", paths: ["/profile", "/profile/tracked-animals", "/profile/missions", "/profile/overview"] },
  ];

  const adminLinks = [
    { to: "/admin-dashboard", label: "Admin Dashboard" },
    { to: "/manage-users", label: "Manage Users" },
    { to: "/reports", label: "Reports" },
    { to: "/admin-profile", label: "Profile" },
    { to: "/admin-species", label: "Species" },
  ];

  const linksToRender = Role === "user" ? userLinks : Role === "admin" ? adminLinks : [];

  return (
    <div className={`bg-dark ${styles.Navbar1} ${isOpen ? styles.expanded : ""}`}>
      <div className={styles.NavbarTop}>
        {/* Logo Left */}
        <div className={styles.LogoCon}>
          <img src="/logo.png" alt="logo" width="30" height="30" />
          <p className={styles.LogoText}>Wildlife Tracker</p>
        </div>

        {/* Center Links (Desktop) */}
        {status ? (
          <>
            <div className={styles.LaptopLinks}>
              {linksToRender.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles.LLink} ${
                    link.paths
                      ? link.paths.includes(Location)
                        ? styles.LActive
                        : ""
                      : Location === link.to
                      ? styles.LActive
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Profile / Alerts */}
            <div className={styles.ProfileCon}>
              <Link to={Role === "user" ? "/profile" : "/admin-profile"}>
                <img
                  src="/me.jpg"
                  alt="profile"
                  width="30"
                  height="30"
                  className={styles.ProfileImg}
                />
              </Link>
              <Link to="/alerts" className={styles.Alert}>
                <FaRegBell size={24} />
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

        {/* Hamburger (Mobile) */}
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
            linksToRender.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.Link} ${
                  link.paths
                    ? link.paths.includes(Location)
                      ? styles.Active
                      : ""
                    : Location === link.to
                    ? styles.Active
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))
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