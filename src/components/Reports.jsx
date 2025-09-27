import styles from "../styles/Reports.module.css";

const Reports = () => {
  const SubmitHandler = (e) => {};
  const today = new Date().toISOString().split("T")[0];
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
        <div className={styles.InpCon}>
          <label className={styles.Label}>Report Type</label>
          <br />
          <select name="Report Type" className={styles.Input}>
            {Report.map((report, index) => {
              return (
                <option key={index} value={report}>
                  {report}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.InpCon}>
          <label className={styles.Label}>Species</label>
          <br />
          <select name="Species" className={styles.Input}>
            {Species.map((specie, index) => {
              return (
                <option key={index} value={specie}>
                  {specie}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.InpCon}>
          <label className={styles.Label}>Conservational Status</label>
          <br />
          <select name="Status" className={styles.Input}>
            {Conservational_Status.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.InpCon}>
          <label className={styles.Label}>Start Date</label>
          <br />
          <input
            name="Start Date"
            type="date"
            max={today}
            className={styles.Input}
          />
        </div>

        <div className={styles.InpCon}>
          <label className={styles.Label}>End Date</label>
          <br />
          <input
            name="End Date"
            type="date"
            max={today}
            className={styles.Input}
          />
        </div>

        <div className={styles.InpCon}>
          <label className={styles.Label}>Export Format</label>
          <br />
          <select name="Export Format" className={styles.Input}>
            {Format.map((format, index) => {
              return (
                <option key={index} value={format}>
                  {format}
                </option>
              );
            })}
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
