import React, { useState } from "react";
import styles from "../styles/Reports.module.css"; // Assuming your original import is correct

const Reports = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const SubmitHandler = (e) => {
    e.preventDefault(); // Stop the default form submission

    // 1. Required Fields Check (Gets all form elements with a 'name' attribute)
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    // Check if any value is empty or null/undefined
    for (const key in formProps) {
        if (!formProps[key]) {
            alert(`Error: Please select a value for '${key}'. All fields are required.`);
            return;
        }
    }

    // 2. Date Comparison Validation (End Date cannot be before Start Date)
    if (new Date(startDate) > new Date(endDate)) {
      alert("Error: The End Date cannot be before the Start Date. Please adjust the dates.");
      return; // Stop the submission
    }

    // --- If ALL validations pass, proceed with submission ---
    console.log("Form data is valid. Submitting report...");
    console.log(formProps);
    // You can now call your API to generate the report here
    // Example: generateReport(formProps);
  };

  const Report = [
    "Species Population",
    "Environmental Impact",
    "Camera Trap Summary",
    "Human Wildlife Conflicts",
    "Health & Mortality",
    "Habitat Usage",
    "Species Movement",
    "Sighting Report",
  ];
  const Species = ["Loin", "Tiger", "Elephant", "Leopard", "Deer", "Peacock"];
  const Conservational_Status = [
    "All Status",
    "Endangered",
    "Vulnerable",
    "Critically Endangered",
  ];
  const Format = ["PDF", "CSV", "EXCEL", "JSON"];

  return (
    <div className={`bg-dark ${styles.Container}`}>
      <h1 className={styles.heading}>Reports Generations</h1>
      <form className={styles.form} onSubmit={SubmitHandler}>

        {/* REPORT TYPE */}
        <div className={styles.InpCon}>
          <label className={styles.Label}>Report Type</label>
          <br />
          {/* Note: If you want to force selection, you can add a default option with value="" and use the 'required' attribute */}
          <select name="Report Type" className={styles.Input} required> 
            <option value="" disabled>Select a Report Type</option>
            {Report.map((report, index) => (
              <option key={index} value={report}>
                {report}
              </option>
            ))}
          </select>
        </div>

        {/* SPECIES */}
        <div className={styles.InpCon}>
          <label className={styles.Label}>Species</label>
          <br />
          <select name="Species" className={styles.Input} required>
            <option value="" disabled>Select a Species</option>
            {Species.map((specie, index) => (
              <option key={index} value={specie}>
                {specie}
              </option>
            ))}
          </select>
        </div>

        {/* CONSERVATIONAL STATUS */}
        <div className={styles.InpCon}>
          <label className={styles.Label}>Conservational Status</label>
          <br />
          <select name="Status" className={styles.Input} required>
            <option value="" disabled>Select Status</option>
            {Conservational_Status.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* START DATE */}
        <div className={styles.InpCon}>
          <label className={styles.Label}>Start Date</label>
          <br />
          <input
            name="Start Date"
            type="date"
            max={today}
            className={styles.Input}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            // Real-time restriction: End date is the latest possible start date
            max={endDate ? endDate : today}
          />
        </div>

        {/* END DATE */}
        <div className={styles.InpCon}>
          <label className={styles.Label}>End Date</label>
          <br />
          <input
            name="End Date"
            type="date"
            max={today}
            className={styles.Input}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            // Real-time restriction: Start date is the earliest possible end date
            min={startDate}
          />
        </div>

        {/* EXPORT FORMAT */}
        <div className={styles.InpCon}>
          <label className={styles.Label}>Export Format</label>
          <br />
          <select name="Export Format" className={styles.Input} required>
             <option value="" disabled>Select Format</option>
            {Format.map((format, index) => (
              <option key={index} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.btnCon}>
          <button type="submit" className={styles.btn}>
            Generate Report
          </button>
        </div>
      </form>
    </div>
  );
};
export default Reports;
