import styles from "../styles/AdminDashboard.module.css";
import KeyPoints from "./KeyPoints";
import { SiReactivex } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { BsClipboard2DataFill } from "react-icons/bs";
const AdminDashboard = () => {
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
    </div>
  );
};
export default AdminDashboard;
