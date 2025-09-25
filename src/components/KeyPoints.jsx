import styles from "../styles/Profile.module.css";
const KeyPoints = ({ No, Name, PassedWidth, Logo }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center 
    ${styles.KeyPoints}`}
      style={{ width: { PassedWidth } }}
    >
      <div className={styles.LogoCon}>{Logo}</div>
      <p className={styles.PointsName}>{Name}</p>
      <p className={styles.No}>{No}</p>
    </div>
  );
};
export default KeyPoints;
