import styles from "../styles/SignUp.module.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div
      className={`${styles.wrapper} d-flex align-items-center justify-content-center`}
    >
      <div className={`${styles.card} p-4 p-sm-5 shadow-lg`}>
        <h2 className="text-center text-light mb-3 h3 h-sm-2">
          Create new account
        </h2>
        <p className="text-center text-secondary mb-4 small">
          Start your journey.
        </p>

        <form>
          <div className={styles.Name}>
            <div className="mb-3">
              <label htmlFor="Firstname" className="visually-hidden">
                FirstName
              </label>
              <input
                id="Firstname"
                type="text"
                className={`form-control ${styles.input}`}
                placeholder="First Name"
                required
                autoComplete="First Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="visually-hidden">
                Last Name
              </label>
              <input
                id="Lastname"
                type="text"
                className={`form-control ${styles.input}`}
                placeholder="Last Name"
                autoComplete="Last Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="visually-hidden">
                Email
              </label>
              <input
                id="Email"
                type="Email"
                className={`form-control ${styles.input}`}
                placeholder="Email"
                autoComplete="fakeemail@email.com"
              />
            </div>
          </div>
          <div className={styles.PassWord}>
            <div className="mb-2">
              <label htmlFor="password" className="visually-hidden">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`form-control ${styles.input}`}
                placeholder="Password"
                required
                autoComplete="current-password"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Confirmpassword" className="visually-hidden">
                Confirm Password
              </label>
              <input
                id="Confirmpassword"
                type="password"
                className={`form-control ${styles.input}`}
                placeholder="Confirm Password"
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          <button type="submit" className={`btn ${styles.loginBtn} w-100`}>
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-secondary mt-3 mb-0 small">
          Already have an account?{" "}
          <Link to="/login" className="text-success text-decoration-none">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
