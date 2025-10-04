import styles from "../styles/Profile.module.css";
import { GiMedal } from "react-icons/gi";
import { TfiMedall } from "react-icons/tfi";
import { FaRegHeart, FaArrowTrendUp } from "react-icons/fa6";
import { IoIosMail, IoMdAddCircleOutline } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Verify } from "../apis/authApi";
const ProfileCard = (props) => {
  const { Role } = useSelector((store) => store.Login);

  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");
    window.location.href = "/login"
  }
  const HandleVerify = async (e) =>{
    e.preventDefault();
    const token = localStorage.getItem("Token");
    console.log(token);
    const res = await Verify(token);
    console.log(res)
    console.log("Verify Account")
  }
  return (
    <div className={`text-white pb-2 ${styles.ProfileCon}`}>
      <div className={styles.BgImg}>
        <div className={styles.IconCon}>
          <TfiMedall className={styles.Icon} />
          <GiMedal className={styles.Icon} />
          <FaRegHeart className={styles.Icon} />
        </div>
        <div className={`d-flex ${styles.DataCon}`}>
          <div className="m-2">
            <img
              src={props.profileImage}
              alt="profile"
              className={styles.ProfileImg}
            />
            <br />
            <span className={styles.Badge}>{props.Badge}</span>
          </div>
          <div>
            <p className={styles.Name}>{props.Name}</p>
            <p className={styles.Username}>@{props.Username}</p>
          </div>
        </div>
      </div>
      <div className={styles.MainData}>
        <div>
          <div className={styles.EmailCon}>
          <p>
            <IoIosMail /> {props.Email}
          </p>
            <p 
              className={styles.Verify}
              onClick={HandleVerify}>Verify Your Account</p>
          </div>
          <p>
            <FaPhoneAlt /> {props.Phone}
          </p>
          <p>
            <FaArrowTrendUp /> {props.Experience}
          </p>
          <p>
            <b>{props.Followers}</b> followers <b>{props.Following}</b>{" "}
            following
          </p>
        </div>
        <div>
          {Role === "admin" ? (
            <Link to="/profile/Create-mission" className="m-2 btn btn-primary">
              <IoMdAddCircleOutline /> Create new mission
            </Link>
          ) : (
            <Link to="/profile/start-mission" className="m-2 btn btn-primary">
              <IoMdAddCircleOutline /> Start New Mission
            </Link>
          )}
          <Link to="/profile/edit-profile" className="m-2 btn btn-primary">
            Edit Profile
          </Link>
          <button onClick={Logout} className="m-2 btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
