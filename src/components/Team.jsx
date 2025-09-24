import styles from "../styles/Team.module.css";
const Team = ({ Img, Name, Role }) => {
  return (
    <div className={styles.TeamCon}>
      <img 
        width={70}
        height={70}
        src={Img} alt={Name} className={styles.TeamImg} />
      <h2 className={styles.TeamName}>{Name}</h2>
      <p className={styles.Role}>{Role}</p>
    </div>
  );
};
export default Team;
