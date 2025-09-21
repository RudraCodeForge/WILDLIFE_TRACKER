import styles from "../styles/Profile.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const ProfileLinks = () => {
  const location= useLocation().pathname;
  return (
    <div className={styles.LinksCon}>
      <Link
        to="/profile/overview"
        className={`
        ${styles.Link}
        ${["/profile","/profile/overview"].includes(location) ? styles.Active : ""}
        `}
      >
        Overview
      </Link>
      <Link to="/profile/missions" 
        className={`
        ${styles.Link}
        ${location === "/profile/missions" ? styles.Active : ""}
        `}>
        Missions
      </Link>
      <Link to="/profile/tracked-animals" 
        className={`
        ${styles.Link}
        ${location === "/profile/tracked-animals" ? styles.Active : ""}
        `}>
        Animals
      </Link>
    </div>
  );
};
export default ProfileLinks;
