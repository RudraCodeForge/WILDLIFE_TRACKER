
import styles from "../styles/Home_Points.module.css"
import Points from "./Points";
import { useSelector } from "react-redux";
const Home_Points = () => {
  const {pointsData} = useSelector((store)=>store.Home)
  return (
    <div className={styles.PointsCon}>
      {pointsData.map((point, index) => (
        <li key={index}>
          <Points ICON={point.ICON} TITLE={point.TITLE} DESC={point.DESC} />
        </li>
      ))}
    </div>
  );
};

export default Home_Points;