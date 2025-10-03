import { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import {login} from "../store/index";
import styles from "../styles/Navbar1.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const dispatch = useDispatch()

  const { Role, userLinks, adminLinks, isLoggedIn } = useSelector(
    (store) => store.Login,
  );
  const location = useLocation().pathname;
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("User"));
    const storedRole = localStorage.getItem("Role");
    if (storedUser && storedRole) {
      dispatch(login({ User: storedUser, Role: storedRole }));
    }
  }, [dispatch,isLoggedIn]);

  // Links decide karo Redux state ke hisaab se
  const linksToRender = isLoggedIn
    ? Role === "user"
      ? userLinks
      : Role === "admin"
        ? adminLinks
        : []
    : [];

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

        {/* Center Links (Desktop) */}
        {isLoggedIn ? (
          <>
            <div className={styles.LaptopLinks}>
              {linksToRender.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles.LLink} ${
                    link.paths
                      ? link.paths.includes(location)
                        ? styles.LActive
                        : ""
                      : location === link.to
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
          {isLoggedIn ? (
            linksToRender.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.Link} ${
                  link.paths
                    ? link.paths.includes(location)
                      ? styles.Active
                      : ""
                    : location === link.to
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
                className={`${styles.Link} ${location === "/login" ? styles.Active : ""}`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${styles.Link} ${location === "/signup" ? styles.Active : ""}`}
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
