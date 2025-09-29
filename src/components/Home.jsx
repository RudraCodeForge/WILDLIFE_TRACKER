import styles from "../styles/Home.module.css";
import Home_Points from "./Home_Points";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={`bg-dark ${styles.home}`}> 
        <div className={styles.innerhome}>
          <div className={styles.bgimg}>
            <p className={styles.mheading}>प्रकृति की रक्षा, तकनीक के साथ</p>
            <p className={styles.sheading}>
              Empowering conservation efforts through real-time tracking and
              data driven insights.
            </p>
            <button className={`btn btn-success ${styles.hbtn}`}> 
              Learn More
            </button>
          </div>
        </div>
        <Home_Points />
      </div>
    </>
  );
};
export default Home;