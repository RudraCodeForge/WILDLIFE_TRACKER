import styles from "../styles/Activities.module.css";
const Activities = ({Name, Activity,Date}) =>{
  return(
    <div className={styles.Container}>
      <h1 className={styles.heading}>{Name}</h1>
      <p className={styles.activity}>{Activity}</p>
      <p className={styles.date}>{Date}</p>
    </div>
  )
}
export default Activities;