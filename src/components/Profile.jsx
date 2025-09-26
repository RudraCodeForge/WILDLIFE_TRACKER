import ProfileCard from "./ProfileCard";
import styles from "../styles/Profile.module.css";
import ProfileLinks from "./ProfileLinks";
import KeyPoints from "./KeyPoints";
import { Outlet,useLoaderData } from "react-router-dom";
const Profile = () => {
  const User= useLoaderData();
  const user = {
    Exprience: "4+ years of experience",
    Followers: "2.5M",
    Following: "389",
  };
  const activities = [
    {
      No: 42,
      Name: "Mission Completed",
    },
    {
      No: 5,
      Name: "Active Missions",
    },
    {
      No: 128,
      Name: "Animal Tracked.",
    },
  ];
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
      <div className={styles.KeypointsCon}>
        {activities.map((activity, index) => {
          return (
            <KeyPoints
              key={index}
              No={activity.No}
              Name={activity.Name}
              PassedWidth={"30vw"}
            />
          );
        })}
      </div>
      <ProfileLinks />
      <Outlet />
    </div>
  );
};

export const FetchProfile = () => {
  return fetch("https://dummyjson.com/users/2")
    .then((res) => res.json())
    .then((data) => {
      return data; // return data if you want to use it later
    })
    .catch((err) => console.error("Error fetching profile:", err));
};

export default Profile;
