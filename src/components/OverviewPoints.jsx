import styles from "../styles/Overview.module.css";
const OverviewPoints = ({ Name, Time }) => {
  const colors = ["red", "green", "blue", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={styles.OverviewPoints}>
      <div
        style={{ backgroundColor: randomColor }}
        className={styles.PointColor}
      ></div>
      <div>
        <p className={styles.PointName}>{Name}</p>
        <p className={styles.PointTime}>{Time}</p>
      </div>
    </div>
  );
};
export default OverviewPoints;
