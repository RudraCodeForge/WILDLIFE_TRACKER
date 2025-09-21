import ProfileCard from "./ProfileCard";
import styles from "../styles/Profile.module.css";
import ProfileLinks from "./ProfileLinks";
import KeyPoints from "./KeyPoints";
import {Outlet} from "react-router-dom";
const Profile = () => {
  const user = {
    ProfileImg: "/me.jpg",
    Name: "Prince Daksh",
    Username: "@Rudra",
    Badge: "Developer",
    Email: "jitandradaksh533@gmail.com",
    Phone: "+91 790626XXXX",
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
        Name={user.Name}
        Username={user.Username}
        Badge={user.Badge}
        Email={user.Email}
        Phone={user.Phone}
        Experience={user.Exprience}
        Followers={user.Followers}
        Following={user.Following}
        ProfileImg={user.ProfileImg}
      />
      <div className={styles.KeypointsCon}>
        {activities.map((activity, index) => {
          return (
            <KeyPoints key={index} No={activity.No} Name={activity.Name} />
          );
        })}
      </div>
      <ProfileLinks />
      <Outlet />
    </div>
  );
};
export default Profile;
