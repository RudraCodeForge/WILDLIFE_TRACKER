import ProfileCard from "./ProfileCard";
import styles from "../styles/Profile.module.css";
import ProfileLinks from "./ProfileLinks";
import KeyPoints from "./KeyPoints";
import { ProfileData } from "../apis/DATAAPI";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import {refreshTokenFunc} from "../apis/authApi";
const Profile = () => {
  const User = useLoaderData();
  const { Role, Token } = useSelector((store) => store.Login);

  const user = {
    Exprience: "4+ years of experience",
    Followers: "2.5M",
    Following: "389",
  };

  const activities = [
    { No: 42, Name: "Mission Completed" },
    { No: 5, Name: "Active Missions" },
    { No: 128, Name: "Animals Tracked" },
  ];

  if (!Token) {
    return <Navigate to="/login" replace />;
  }

  if (!User) {
    localStorage.removeItem("Token")
    return <Spinner/>
  }

  return (
    <div className={`bg-dark ${styles.Container}`}>
      <ProfileCard
        Verified = {User.isVerified}
        profileImage={User.profileImage}
        Name={User.firstName}
        LastName={User.lastName}
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

export const ProfileFetch = async () => {
  const token = localStorage.getItem("Token");
  try {
    const res = await ProfileData(token,refreshTokenFunc);;
    if (res && res.UserData) {
      return res.UserData;
    } else {
      throw new Error("No user data in response");
    }
  } catch (err) {
    console.error("Error fetching profile:", err);
    return null;
  }
};
