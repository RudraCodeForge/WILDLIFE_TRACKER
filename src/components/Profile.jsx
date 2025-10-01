import ProfileCard from "./ProfileCard";
import styles from "../styles/Profile.module.css";
import ProfileLinks from "./ProfileLinks";
import KeyPoints from "./KeyPoints";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const Profile = () => {
  const { Role, isLoggedIn } = useSelector((store) => store.SignUp);
  const User = useLoaderData();

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
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={`bg-dark ${styles.Container}`}>
      <ProfileCard
        Name={User.firstName}
        Username={User.username}
        Badge={User.company.title}
        Email={User.email}
        Phone={User.phone}
        Experience={user.Exprience}
        Followers={user.Followers}
        Following={user.Following}
        ProfileImg={User.image}
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

export const FetchProfile = () => {
  return fetch("https://dummyjson.com/users/2")
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching profile:", err));
};

export default Profile;
