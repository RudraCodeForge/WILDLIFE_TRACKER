import styles from "../styles/Dashboard.module.css";
import MyMap from "./Map";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import KeyPoints from "./KeyPoints";
import RecentActivity from "./ActivityTrend";
const Dashboard = () => {
  const {isLoggedIn} = useSelector((store)=>store.Login);
  if(!isLoggedIn){
    return <Navigate to="/login" replace />
  }
  const activityData = [
    { day: "Mon", value: 100 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 20 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 95 },
    { day: "Sun", value: 55 },
  ];

  const totalMax = 100;
  const firstValue = activityData[0].value;
  const lastValue = activityData[activityData.length - 1].value;
  const difference = lastValue - firstValue;
  const Percent= (difference/firstValue)*100;
  const PercentRounded = Percent.toFixed(1);
  const Check = PercentRounded >= 0;
  const displayPercent = (Check ? "+" : "") + PercentRounded + "%";
  
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
      <div className={styles.MapCon}>
        <h1 className={styles.heading}>Endangered Species Tracking</h1>
        <MyMap />
        <div className={styles.Search}>
          <input type="text" placeholder="Search for species or location ..." />
        </div>
      </div>
      <h1 className={styles.heading}>Key Data Points</h1>
      <div className={styles.KeypointsCon}>
        {Points.map((point) => {
          return <KeyPoints key={point.id} No={point.No} Name={point.Name} />;
        })}
      </div>
      <div className={styles.Zone}>
        <p className="text-white">Most Active Zone</p>
        <h1 className={styles.heading}>Amazon Rainforest</h1>
      </div>
      <div className={styles.Trend}>
        <RecentActivity
          name={"Recent Activity"}
          desc={`${displayPercent} Last 7 Days`}
          activityData={activityData}
          totalMax={totalMax}
        />
      </div>
    </div>
  );
};
export default Dashboard;
