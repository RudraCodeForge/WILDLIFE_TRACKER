import styles from "../styles/Profile.module.css";
const KeyPoints = ({No,Name,PassedWidth,Logo})=>{
  return(
    <div className={`d-flex flex-column align-items-center 
    ${styles.KeyPoints}`}
      style={{width:{PassedWidth}}}>
      {Logo}
      <p className={styles.No}>{No}</p>
      <p className={styles.PointsName}>{Name}</p>
    </div>
  )
}
export default KeyPoints;