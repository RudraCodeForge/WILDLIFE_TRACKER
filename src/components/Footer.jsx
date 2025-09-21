import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-white">Wildlife Tracker</h2>
          <p className="text-sm mt-2">Tracking Wildlife, Saving Nature 🌍</p>
        </div>

        {/* Support & Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/help" className="hover:text-green-400">Help Center</a></li>
            <li><a href="/report" className="hover:text-green-400">Report Issue</a></li>
            <li><a href="/privacy" className="hover:text-green-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-green-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social & Awareness */}
        <div>
          <h3 className="text-lg font-semibold text-white">Join the Mission</h3>
          <p className="text-sm mt-2">Follow us for updates & awareness 🐾</p>
          <div className="flex space-x-4 mt-3 text-xl">
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-400"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © 2025 Wildlife Tracker. All rights reserved.
        <br />
        <em>“Every track helps us protect endangered species.”</em>

        {/* Developer Credit */}
        <p className="mt-3 text-gray-400">
          Developed by <span className="text-green-400 font-semibold">Prince Daksh</span> 💻
        </p>
      </div>
    </footer>
  );
};

export default Footer;