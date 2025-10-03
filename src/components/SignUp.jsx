import styles from "../styles/SignUp.module.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SignupUser } from "../apis/authApi";

const SignUp = () => {
  const { isLoggedIn } = useSelector((store) => store.SignUp);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    DateOfBirth: "",
    password: "",
    confirmPassword: "",
    Terms: false,
    profileImage: "", // Cloudinary image URL
  });

  const [uploading, setUploading] = useState(false);

  const [error, setError] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Image upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_upload"); // apna preset
    data.append("context", ""); // remove metadata/context
    data.append("metadata", ""); // remove metadata

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/db4dzwpfm/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const result = await res.json();
      setFormData((prev) => ({
        ...prev,
        profileImage: result.secure_url, // Cloudinary URL
      }));
    } catch (err) {
      console.error("Image upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await SignupUser(formData);
      setError(res.errorMessages);
      console.log("Signup response:", res);
    } catch (error) {
      console.error("ERROR SIGNING UP:", error);
    }
  };

  return (
    <div
      className={`${styles.wrapper} d-flex align-items-center justify-content-center`}
    >
      <div className={`${styles.card} p-4 p-sm-5 shadow-lg`}>
        <div className={styles.header}>
          <h2 className="text-center text-light mb-2 h3 h-sm-2">
            Join Wildlife Tracker
          </h2>
          <p className="text-center text-secondary mb-4 small">
            Start your conservation journey today
          </p>
          <div className="ErrorMessageCon">
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Image upload */}
          <div className="mb-3">
            <label htmlFor="profileImage" className="visually-hidden">
              Profile Image
            </label>
            <input
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/*"
              className={`form-control ${styles.input}`}
              onChange={handleImageUpload}
            />
            {uploading && <p className="small text-info mt-1">Uploading image...</p>}
          </div>

          <div className={styles.formSection}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="visually-hidden">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={`form-control ${styles.input}`}
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="visually-hidden">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={`form-control ${styles.input}`}
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="visually-hidden">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className={`form-control ${styles.input}`}
                placeholder="@username"
                value={formData.username}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="visually-hidden">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-control ${styles.input}`}
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="visually-hidden">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`form-control ${styles.input}`}
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleInputChange}
                autoComplete="tel"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="DateOfBirth" className={styles.label}>
                Date of Birth
              </label>
              <input
                id="DateOfBirth"
                name="DateOfBirth"
                type="date"
                className={`form-control ${styles.input} ${styles.dateInput}`}
                value={formData.DateOfBirth}
                onChange={handleInputChange}
                autoComplete="bday"
              />
            </div>
          </div>

          <div className={styles.passwordSection}>
            <div className="mb-3">
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className={`form-control ${styles.input}`}
                placeholder="Create Password *"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
                minLength="8"
              />
              <div className={styles.passwordHint}>
                Must be at least 8 characters long
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="visually-hidden">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className={`form-control ${styles.input}`}
                placeholder="Confirm Password *"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
              />
            </div>
          </div>

          <div className={styles.checkboxSection}>
            <div className="form-check mb-3">
              <input
                className={`form-check-input ${styles.checkbox}`}
                type="checkbox"
                id="Terms"
                name="Terms"
                checked={formData.Terms}
                onChange={handleInputChange}
                required
              />
              <label
                className={`form-check-label ${styles.checkboxLabel}`}
                htmlFor="Terms"
              >
                I agree to the{" "}
                <Link
                  to="/termsandcondition"
                  className="text-success text-decoration-none"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacypolicy"
                  className="text-success text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className={`btn ${styles.signupBtn} w-100`}
            disabled={!formData.Terms || uploading}
          >
            {uploading ? "Uploading..." : "CREATE ACCOUNT"}
          </button>
        </form>

        <div className={styles.footer}>
          <p className="text-center text-secondary mt-4 mb-0 small">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-success text-decoration-none fw-semibold"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
