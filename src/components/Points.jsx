import styles from "../styles/Points.module.css";
const Points = () =>{
  return(
    <div className={styles.PointsCon}>
      <img
        src="/logo.png"
        alt="Logo"
        width="28"
        height="28"
        className="d-inline-block align-text-top"
      />
      <h2>Live Tracking</h2>
      <p>Real time location tracking of endangered animals.</p>
    </div>
  )
}
export default Points;