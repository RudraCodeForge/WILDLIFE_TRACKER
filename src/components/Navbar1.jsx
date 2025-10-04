import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { FaRegBell } from "react-icons/fa";
import { login } from "../store/index";
import styles from "../styles/Navbar1.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar1 = () => {
  const { Token, Role, userLinks, adminLinks } = useSelector(
    (store) => store.Login
  );
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const toggleMenu = () => setIsOpen(!isOpen);

  // Sync Redux state with localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    const storedRole = localStorage.getItem("Role");

    if (storedToken && storedRole && !Role) {
      dispatch(login({ Token: storedToken, Role: storedRole }));
    }
  }, [dispatch, Role]);

  // Determine effective role (Redux state preferred, fallback to Token decode)
  let effectiveRole = Role;
  if (!effectiveRole && Token) {
    try {
      const decode = jwtDecode(Token);
      effectiveRole = decode.role || null;
    } catch (err) {
      console.error("Invalid token", err.message);
      effectiveRole = null;
    }
  }

  // Decide which links to render
  const linksToRender =
    effectiveRole === "user"
      ? userLinks
      : effectiveRole === "admin"
      ? adminLinks
      : [];

  return (
    <div className={`bg-dark ${styles.Navbar1} ${isOpen ? styles.expanded : ""}`}>
      <div className={styles.NavbarTop}>
        {/* Logo Left */}
        <div className={styles.LogoCon}>
          <img src="/logo.png" alt="logo" width="30" height="30" />
          <p className={styles.LogoText}>Wildlife Tracker</p>
        </div>

        {/* Center Links (Desktop) */}
        {Token ? (
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
              <Link
                to={effectiveRole === "user" ? "/profile" : "/admin-profile"}
              >
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
          {Token ? (
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
                className={`${styles.Link} ${
                  location === "/login" ? styles.Active : ""
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${styles.Link} ${
                  location === "/signup" ? styles.Active : ""
                }`}
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
