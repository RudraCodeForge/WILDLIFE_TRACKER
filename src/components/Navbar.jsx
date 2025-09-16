import styles from "../styles/Navbar.module.css"
const Navbar = () => {
  const status = false; // Set to true/false to test different states

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between">
        {/* Left - Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src="/logo.png"
            alt="Logo"
            width="28"
            height="28"
            className="d-inline-block align-text-top"
          />
          <span className="fw-semibold">Wildlife Tracker</span>
        </a>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conditional Content */}
        {status ? (
          // Authenticated State - Show navigation + profile
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Center Links */}
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Map
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Species
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            {/* Right - Notification & Profile Icons */}
            <div className="d-flex align-items-center gap-3">
              {/* Notification Bell */}
              <a href="#" className="text-light">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </a>

              {/* Profile Icon */}
              <a href="#" className="d-flex align-items-center">
                <img
                  src="/me.jpg"
                  alt="Profile"
                  className="rounded-circle"
                  width="36"
                  height="36"
                />
              </a>
            </div>
          </div>
        ) : (
          // Unauthenticated State - Show Login & Join buttons
          <>
            {/* Mobile - Collapsible buttons inside hamburger menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto d-md-none">
                <a href="#" className={`nav-link btn btn-success text-white mb-2 ${styles.login}`}>
                  LOGIN
                </a>
                <a href="#" className={`nav-link btn btn-outline-success ${styles.signup}`}>
                  JOIN OUR MISSION
                </a>
              </div>
            </div>

            {/* Desktop - Show buttons on right side */}
            <div className="d-none d-md-flex align-items-center gap-3">
              <a href="#" className="btn btn-success">
                Login
              </a>
              <a href="#" className="btn btn-outline-success">
                Join Our Mission
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;