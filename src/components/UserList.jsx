import styles from "../styles/SpeciesList.module.css";
import Species from "./Species";
import { useLoaderData, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
const UserList = () => {
  const users = useLoaderData();
  const { isLoggedIn, Role } = useSelector((store) => store.SignUp);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else if (Role !== "admin") {
    return <Navigate to="/" replace />;
  }
  if (!users) {
    return <Spinner />;
  }

  return (
    <div className={`bg-dark ${styles.container}`}>
      <h1 className={styles.Heading}>Manage Users</h1>
      {users.map((user) => {
        return (
          <Species
            key={user.id}
            Image={user.image}
            Name={user.firstName}
            ScientificName={user.email}
            Status={user.role}
            Link={`/manage-user/${user.id}`}
            LinkName={"Manage User →"}
          />
        );
      })}
    </div>
  );
};

export const Users = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data.users;
  } catch (error) {
    return null;
  }
};
export default UserList;
