
import styles from "../styles/SignUp.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`${styles.wrapper} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.card} p-4 p-sm-5 shadow-lg`}>
        <div className={styles.header}>
          <h2 className="text-center text-light mb-2 h3 h-sm-2">
            Join Wildlife Tracker
          </h2>
          <p className="text-center text-secondary mb-4 small">
            Start your conservation journey today
          </p>
        </div>

        <form onSubmit={handleSubmit}>
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
              <label htmlFor="dateOfBirth" className={styles.label}>
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                className={`form-control ${styles.input} ${styles.dateInput}`}
                value={formData.dateOfBirth}
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
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
              <label className={`form-check-label ${styles.checkboxLabel}`} htmlFor="agreeToTerms">
                I agree to the{" "}
                <a href="#" className="text-success text-decoration-none">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-success text-decoration-none">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className={`btn ${styles.signupBtn} w-100`}
            disabled={!formData.agreeToTerms}
          >
            CREATE ACCOUNT
          </button>
        </form>

        <div className={styles.footer}>
          <p className="text-center text-secondary mt-4 mb-0 small">
            Already have an account?{" "}
            <Link to="/login" className="text-success text-decoration-none fw-semibold">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
