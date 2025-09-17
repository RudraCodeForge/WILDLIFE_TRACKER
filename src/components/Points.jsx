import styles from "../styles/Points.module.css";

const Points = ({ICON,TITLE,DESC}) => {
  return (
    <div className={styles.PointsCon}>
      <ICON
        size={28} 
        color="green" 
        className={`d-inline-block align-text-top ${styles.Icon}`}
      />
      <h2>{TITLE}</h2>
      <p>{DESC}</p>
    </div>
  )
}

export default Points;