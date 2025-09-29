import styles from "../styles/Home.module.css";
import Home_Points from "./Home_Points";
;

const Home = () => {
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