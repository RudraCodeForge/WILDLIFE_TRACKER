import styles from "../styles/SpeciesList.module.css";
import Species from "./Species";
import {useLoaderData} from "react-router-dom";
const UserList = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h1 className={styles.Heading}>Manage Users</h1>
      {users.map((user)=>{
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
  )
}
export const Users = async () => {
  try {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return data.users;  // This will be returned properly
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};
export default UserList;