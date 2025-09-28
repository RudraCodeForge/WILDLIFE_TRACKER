import styles from "../styles/SpecieDetails.module.css";
const SData = ({ Name, Value }) => {
  return(
    <div>
      <h1 className={styles.Heading}>{Name}</h1>
        <p className={styles.Desc}>
          {Value}
        </p>
    </div>
  )
};
export default SData;
