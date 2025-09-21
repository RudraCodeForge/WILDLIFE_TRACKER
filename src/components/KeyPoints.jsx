import styles from "../styles/Profile.module.css";
const KeyPoints = ({No,Name})=>{
  return(
    <div className={`d-flex flex-column align-items-center ${styles.KeyPoints}`}>
      <p className={styles.No}>{No}</p>
      <p className={styles.PointsName}>{Name}</p>
    </div>
  )
}
export default KeyPoints;