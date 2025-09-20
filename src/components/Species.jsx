import styles from "../styles/SpeciesList.module.css";

const Species = (props) => {
  return (
    <div className={`${styles.card} d-flex align-items-center justify-content-between`}>
      {/* Left Section: Image + Name */}
      <div className="d-flex align-items-center">
        <img
          src={props.Image}
          alt={props.Name}
          className={styles.image}
        />
        <div className="ms-3">
          <h5 className={styles.name}>{props.Name}</h5>
          <p className={styles.scientific}>{props.ScientificName}</p>
        </div>
      </div>

      {/* Right Section: Badge + Button */}
      <div className="text-end">
        <span
          className={`badge rounded-pill ${styles.badge} ${
            props.Status === "Critical"
              ? styles.cr
              : props.Status === "Endangered"
              ? styles.en
              : styles.vu
          }`}
        >
          {props.Status}
        </span>
        <div>
          <a href="#" className={styles.details}>
            View Details →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Species;