
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaPaw, FaLeaf, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-light pt-5 pb-3 mt-5`}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={styles.brandSection}>
              <h3 className={`${styles.brandTitle} text-success fw-bold mb-3`}>
                <FaPaw className="me-2" />
                WILDLIFE TRACKER
              </h3>
              <p className={`${styles.brandDesc} mb-3`}>
                Tracking Wildlife, Preserving Nature for Future Generations
              </p>
              <div className={`${styles.missionBadge} bg-success bg-opacity-10 p-2 rounded`}>
                <small className="text-success">
                  <FaLeaf className="me-1" />
                  Every Track Counts 🌍
                </small>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={`${styles.sectionTitle} text-success border-bottom border-success pb-2 mb-3`}>
              Support & Legal
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contactus" className={`${styles.footerLink} text-decoration-none`}>
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacypolicy" className={`${styles.footerLink} text-decoration-none`}>
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/termsandcondition" className={`${styles.footerLink} text-decoration-none`}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={`${styles.sectionTitle} text-success border-bottom border-success pb-2 mb-3`}>
              Join Our Mission
            </h5>
            <p className=" small mb-3">
              Follow us for wildlife updates and conservation awareness
            </p>
            <div className={`${styles.socialLinks} d-flex gap-3 mb-3`}>
              <a href="#" className={`${styles.socialIcon} `} aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className={`${styles.socialIcon} `} aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className={`${styles.socialIcon} `} aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className={`${styles.socialIcon} `} aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
            <div className={`${styles.conservationBadge} bg-success bg-opacity-10 p-2 rounded text-center`}>
              <small className="text-success">
                <FaGlobe className="me-1" />
                Conservation Matters
              </small>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0  small">
              © 2025 Wildlife Tracker. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 small">
              Developed with 💚 by{" "}
              <span className="text-success fw-semibold">Prince Daksh</span>
            </p>
          </div>
        </div>

        {/* Conservation Message */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <div className={`${styles.conservationMessage} bg-success bg-opacity-10 p-3 rounded`}>
              <em className="text-success">
                "Every species matters. Every track helps us protect our planet's biodiversity."
              </em>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
