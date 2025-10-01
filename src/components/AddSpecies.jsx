import React, { useRef } from "react";
import styles from "../styles/AddSpeciesForm.module.css";

const AddSpeciesForm = () => {
  const speciesNameRef = useRef(null);
  const scientificNameRef = useRef(null);
  const populationEstimateRef = useRef(null);
  const habitatRef = useRef(null);
  const geographicRangeRef = useRef(null);
  const primaryThreatsRef = useRef(null);
  const conservationEffortsRef = useRef(null);
  const speciesImageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = {
      speciesName: speciesNameRef.current.value,
      scientificName: scientificNameRef.current.value,
      populationEstimate: populationEstimateRef.current.value,
      habitat: habitatRef.current.value,
      geographicRange: geographicRangeRef.current.value,
      primaryThreats: primaryThreatsRef.current.value,
      conservationEfforts: conservationEffortsRef.current.value,
      speciesImage: speciesImageRef.current.files[0] || null,
    };

    console.log("Form Data Submitted:", submittedData);
    // Optional: Reset form fields after submission
    e.target.reset();
  };

  return (
    <div className={`bg-dark p-3`}>
      <div className={`${styles.formContainer} container p-4 bg-dark`}>
        <h2 className={styles.formTitle}>Add New Species</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="speciesName" className={styles.formLabel}>
                  Species Name
                </label>
                <input
                  type="text"
                  className={`${styles.formInput} form-control`}
                  id="speciesName"
                  ref={speciesNameRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="scientificName" className={styles.formLabel}>
                  Scientific Name
                </label>
                <input
                  type="text"
                  className={`${styles.formInput} form-control`}
                  id="scientificName"
                  ref={scientificNameRef}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="populationEstimate"
                  className={styles.formLabel}
                >
                  Population Estimate
                </label>
                <input
                  type="number"
                  className={`${styles.formInput} form-control`}
                  id="populationEstimate"
                  ref={populationEstimateRef}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="speciesImage" className={styles.formLabel}>
                  Species Image
                </label>
                <input
                  type="file"
                  className={`${styles.formInput} form-control`}
                  id="speciesImage"
                  ref={speciesImageRef}
                  accept="image/*"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="habitat" className={styles.formLabel}>
                  Habitat
                </label>
                <textarea
                  className={`${styles.formTextarea} form-control`}
                  id="habitat"
                  rows="4"
                  ref={habitatRef}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="geographicRange" className={styles.formLabel}>
                  Geographic Range
                </label>
                <textarea
                  className={`${styles.formTextarea} form-control`}
                  id="geographicRange"
                  rows="4"
                  ref={geographicRangeRef}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="primaryThreats" className={styles.formLabel}>
                  Primary Threats
                </label>
                <textarea
                  className={`${styles.formTextarea} form-control`}
                  id="primaryThreats"
                  rows="4"
                  ref={primaryThreatsRef}
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label
                  htmlFor="conservationEfforts"
                  className={styles.formLabel}
                >
                  Conservation Efforts
                </label>
                <textarea
                  className={`${styles.formTextarea} form-control`}
                  id="conservationEfforts"
                  rows="4"
                  ref={conservationEffortsRef}
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Add Species
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpeciesForm;
