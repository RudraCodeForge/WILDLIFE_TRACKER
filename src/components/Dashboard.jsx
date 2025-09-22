import styles from "../styles/Dashboard.module.css";
import MyMap from "./Map";
import KeyPoints from "./KeyPoints";
import RecentActivity from "./ActivityTrend";

const Dashboard = () => {
  const Points = [
    {
      id: 1,
      No: 150,
      Name: "Total Species Monitored",
    },
    {
      id: 2,
      No: 230,
      Name: "Total Animals Tracked",
    },
  ];

  return (
    <div className={`bg-dark ${styles.dashboard}`}> 
      <div className={styles.containerGrid}>
        {/* Left: Map */}
        <div className={styles.leftPanel}>
          <div className={styles.MapCon}>
            <h1 className={styles.heading}>Endangered Species Tracking</h1>
            <MyMap />
            <div className={styles.Search}>
              <input
                type="text"
                placeholder="Search for species or location ..."
              />
            </div>
          </div>
        </div>

        {/* Right: Sidebar (Key points, Zone, Activity) */}
        <aside className={styles.rightPanel}>
          <h2 className={styles.sideHeading}>Key Data Points</h2>
          <div className={styles.KeypointsCon}>
            {Points.map((point) => {
              return <KeyPoints key={point.id} No={point.No} Name={point.Name} />;
            })}
          </div>

          <div className={styles.Zone}>
            <p className="text-white small">Most Active Zone</p>
            <h3 className={styles.zoneHeading}>Amazon Rainforest</h3>
          </div>

          <div className={styles.Trend}>
            <RecentActivity />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;