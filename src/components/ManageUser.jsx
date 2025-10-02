import styles from "../styles/ManageUser.module.css";
import ProfileCard from "./ProfileCard";
import { useLoaderData , Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
const ManageUser = () => {
  const {Role, isLoggedIn} = useSelector((state) => state.Login);
  if(!isLoggedIn){
    return <Navigate to="/login" replace />
  }
  else if(Role !== "admin"){
    return <Navigate to="/" replace />
  }
  const User = useLoaderData(); // Loader ka data
  const user = {
    Exprience: "4+ years of experience",
    Followers: "2.5M",
    Following: "389",
  };

  const handleBlock = () => {
    console.log(`Block user with id: ${User.id}`);
  };

  const handleDelete = () => {
    fetch(`https://dummyjson.com/users/${User.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleUpdate = () => {
    console.log(`Update user with id: ${User.id}`);
  };

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
      <div className={styles.BtnCon}>
        <button
          onClick={handleBlock}
          className={`${styles.Block} ${styles.btn}`}
        >
          Block User
        </button>
        <button
          onClick={handleUpdate}
          className={`${styles.Update} ${styles.btn}`}
        >
          Update User
        </button>
        <button
          onClick={handleDelete}
          className={`${styles.Delete} ${styles.btn} `}
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export const SpecificProfile = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  } catch (err) {
    console.error("Error fetching profile:", err);
    throw err;
  }
};

export default ManageUser;
