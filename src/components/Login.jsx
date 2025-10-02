import styles from "../styles/Login.module.css";
import { Link , Navigate} from "react-router-dom";
import { loginUser } from "../apis/authApi";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {login} from "../store/index";
const Login = () => {
  const {isLoggedIn} = useSelector((store)=>store.Login);
  if(isLoggedIn){
    return <Navigate to="/" replace />;
  }
  const dispatch = useDispatch()
  const HandleSubmit = async (e) =>{
    e.preventDefault();
    const Username = e.target.username.value;
    const password = e.target.password.value;
    try{
    const res = await loginUser(Username, password);
      const {id , username, email, firstName , lastName, gender, image} = res;
      const User = {id,username,email,firstName,lastName,gender,image};
      dispatch(login(User));
      localStorage.setItem("User", JSON.stringify(User))
      localStorage.setItem("isLoggedIn", "true")
    } catch(error){
      console.error("Error logging in:", error);
    }
  }
  return (
    <div className={`${styles.wrapper} d-flex align-items-center justify-content-center`}>
      <div className={`${styles.card} p-4 p-sm-5 shadow-lg`}>
        <h2 className="text-center text-light mb-3 h3 h-sm-2">Welcome Back</h2>
        <p className="text-center text-secondary mb-4 small">
          Login to continue your journey.
        </p>

        <form onSubmit={HandleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="visually-hidden">
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="Username or Email"
              required
              autoComplete="username"
            />
          </div>
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

          <div className="mb-3 text-start">
            <Link to="/forget_password" className="text-secondary small text-decoration-none">
              Forgot your password?
            </Link>
          </div>

          <button type="submit" className={`btn ${styles.loginBtn} w-100`}>
            Login
          </button>
        </form>

        <p className="text-center text-secondary mt-3 mb-0 small">
          Don't have an account?{" "}
          <Link to="/signup" className="text-success text-decoration-none">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;