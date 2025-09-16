import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.bgimg}>
          <p className={styles.mheading}>प्रकृति की रक्षा, तकनीक के साथ</p>
          <p className={styles.sheading}>
            Empowering conservation efforts through real-time tracking and data
            driven insights.
          </p>
          <button className={`btn btn-success ${styles.hbtn}`}>
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
