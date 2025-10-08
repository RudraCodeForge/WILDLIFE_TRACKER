import styles from "../styles/Home.module.css";
import Home_Points from "./Home_Points";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const Data = useLoaderData();
  return (
    <div className={`bg-dark ${styles.home}`}>
      <div className={styles.innerhome}>
        <div className={styles.bgimg}>
          <p className={styles.mheading}>प्रकृति की रक्षा, तकनीक के साथ</p>
          <p className={styles.sheading}>
            Empowering conservation efforts through real-time tracking and
            data driven insights.
          </p>
          <button className={`btn btn-success ${styles.hbtn}`}>Learn More</button>
        </div>
      </div>

      <Home_Points PointsData={Data.pointsData} />
    </div>
  );
};

export const FirstApi = async () => {
  try {
    const res = await fetch("https://1f9d7787-007d-4971-b16c-f2c18ecebd01-00-1vlcmhotfp1le.sisko.replit.dev/");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return { pointsData: [] }; // fallback empty array
  }
};

export default Home;