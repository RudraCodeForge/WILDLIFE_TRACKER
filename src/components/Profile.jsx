import ProfileCard from "./ProfileCard";
import styles from "../styles/Profile.module.css";
import ProfileLinks from "./ProfileLinks";
import KeyPoints from "./KeyPoints";
import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";

const Profile = () => {
  const User = {
    profileImage:"",
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    phone:"",
    
  }
  const { Role, Token} = useSelector((store) => store.Login);
  const user = {
    Exprience: "4+ years of experience",
    Followers: "2.5M",
    Following: "389",
  };

  const activities = [
    { No: 42, Name: "Mission Completed" },
    { No: 5, Name: "Active Missions" },
    { No: 128, Name: "Animal Tracked." },
  ];

  // ✅ Automatic redirect if not logged in
  if (!Token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={`bg-dark ${styles.Container}`}>
      <ProfileCard
        profileImage={User.profileImage}
        Name={User.firstName}
        Username={User.username}
        Badge={Role}
        Email={User.email}
        Phone={User.phone}
        Experience={user.Exprience}
        Followers={user.Followers}
        Following={user.Following}
      />
      {Role === "user" && (
        <div className={styles.KeypointsCon}>
          {activities.map((activity, index) => (
            <KeyPoints
              key={index}
              No={activity.No}
              Name={activity.Name}
              PassedWidth={"30vw"}
            />
          ))}
        </div>
      )}
      <ProfileLinks />
      <Outlet />
    </div>
  );
};

export default Profile;
