import styles from "../styles/Profile.module.css";
import KeyPoints from "./KeyPoints"
import { GiMedal } from "react-icons/gi";
import { TfiMedall } from "react-icons/tfi";
import { FaRegHeart, FaArrowTrendUp } from "react-icons/fa6";
import { IoIosMail, IoMdAddCircleOutline } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProfileCard = (props) => {
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
              src={props.ProfileImg}
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
          <p>
            <IoIosMail /> {props.Email}
          </p>
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
          <Link to="/profile/start-mission" className="m-2 btn btn-primary">
            <IoMdAddCircleOutline /> Start New Mission
          </Link>
          <Link to="/profile/edit-profile" className="m-2 btn btn-primary">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
