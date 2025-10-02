import styles from "../styles/Points.module.css";
const Points = ({ICON,TITLE,DESC}) => {
  return (
    <div className={styles.PointsCon}>
      <div className={styles.Icon}>
        <ICON size={28} />
      </div>
      <h2>{TITLE}</h2>
      <p>{DESC}</p>
    </div>
  )
}

export default Points;