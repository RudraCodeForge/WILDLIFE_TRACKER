import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={`${styles.wrapper} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.card} p-4 shadow-lg`}>
        <h2 className="text-center text-light mb-3">Welcome Back</h2>
        <p className="text-center text-secondary mb-4">
          Login to continue your journey.
        </p>

        <form>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="Username or Email"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className={`form-control ${styles.input}`}
              placeholder="Password"
            />
          </div>

          <div className="mb-3 text-start">
            <a href="#" className="text-secondary small">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className={`btn ${styles.loginBtn} w-100`}>
            Login
          </button>
        </form>

        <p className="text-center text-secondary mt-3 mb-0">
          Don’t have an account?{" "}
          <a href="#" className="text-success">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;