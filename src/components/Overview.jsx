import styles from "../styles/Overview.module.css";
import OverviewPoints from "./OverviewPoints";
const Overview = () => {
  const Overviewpoints = [
    {
      id: 1,
      Name: "Submitted the new photo of Grizzly Bear",
      Time: "20 Hours ago",
    },
    {
      id: 2,
      Name: "Submitted the new photo of Grizzly Bear",
      Time: "20 Hours ago",
    },
  ];
  return (
    <div className={styles.OverviewCon}>
      {Overviewpoints.map((point) => {
        return (
          <OverviewPoints 
            key={point.id} 
            Name={point.Name} 
            Time={point.Time} />
        );
      })}
    </div>
  );
};
export default Overview;
