import styles from "../styles/AdminDashboard.module.css";
import KeyPoints from "./KeyPoints";
import { SiReactivex } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import Activities from "./Activities";
import ImageSlider from "./ImageSlider";
import { useLoaderData } from "react-router-dom";
import { BsClipboard2DataFill } from "react-icons/bs";
const AdminDashboard = () => {
  const Activity = useLoaderData();
  const elephantImages = [
    "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    "https://images.unsplash.com/photo-1544211412-2a32426e7fd5",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  ];
  const Points = [
    {
      id: 1,
      No: 1,
      Name: "Total Users",
      Logo: <FaUsers size={30} color="lime" />,
    },
    {
      id: 2,
      No: 350,
      Name: "Active Species",
      Logo: <SiReactivex size={30} color="lime" />,
    },
    {
      id: 3,
      No: 5800,
      Name: "Observations Recorded",
      Logo: <BsClipboard2DataFill size={30} color="lime" />,
    },
  ];
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h1 className={styles.heading}>Admin Dashboard</h1>
      <p className={styles.point}>Overview of system-level setting and data.</p>
      {Points.map((point) => {
        return (
          <KeyPoints
            key={point.id}
            No={point.No}
            Name={point.Name}
            Logo={point.Logo}
          />
        );
      })}
      <h1 className={styles.heading}>Recent Activities</h1>
      <div className={styles.ACon}>
        {Activity.map((act) => {
          return (
            <Activities
              key={act.id}
              Name={act.Name}
              Activity={act.Activity}
              Date={act.Date}
            />
          );
        })}
      </div>
      <div className="container mt-4">
        <h1>African Elephant</h1>
        <ImageSlider images={elephantImages} />
        {/* Baaki details jaise habitat, population, threats... */}
      </div>
    </div>
  );
};
export const ActivityData = () => {
  return fetch("https://dummyjson.com/c/6edb-f097-42f3-85c4")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
export default AdminDashboard;
