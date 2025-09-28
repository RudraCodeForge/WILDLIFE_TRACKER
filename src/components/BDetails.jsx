import styles from "../styles/SpecieDetails.module.css";
const BDetails = ({ Name, Value }) => {
  return (
    <div className={styles.Basic}>
      <p className={styles.left}>{Name}</p>
      <p className={styles.right}>{Value}</p>
    </div>
  );
};
export default BDetails;
