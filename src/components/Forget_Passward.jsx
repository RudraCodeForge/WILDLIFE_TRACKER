import styles from "../styles/Login.module.css";
const Forget_Passward = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();

    console.log(e.target.Email.value);
  }
  return (
    <div className={`${styles.wrapper} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.card} p-4 p-sm-5 shadow-lg`}>
        <h2 className="text-center text-light mb-3 h3 h-sm-2">Reset your password</h2>
        <p className="text-center text-secondary mb-4 small">
          Enter your email address and we'll send you a password reset link.
        </p>

        <form onSubmit={SubmitHandler}>
          <div className="mb-3">
            <label htmlFor="Email" className="visually-hidden">
              Email
            </label>
            <input
              id="Email"
              type="Email"
              className={`form-control ${styles.input}`}
              placeholder="Email address"
              required
              autoComplete="fakeeamil@email.com"
            />
          </div>
          <button type="submit" className={`btn ${styles.loginBtn} w-100`}>
            Forget Password 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget_Passward;