// Home_Points.jsx
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import styles from "../styles/Home_Points.module.css"
import Points from "./Points";

const Home_Points = () => {
  const pointsData = [
    {
      ICON: AiOutlineEnvironment,
      TITLE: "Live Tracking",
      DESC: "Real time location tracking of endangered animals.",
    },
    {
      ICON: BiBarChartSquare,    
      TITLE: "Data & Insights",
      DESC: "Comprehensive data analysis for informed conservation efforts.",
    },
    ,
    {
      ICON: AiOutlineSafety,    
      TITLE: "Secure Montring",
      DESC: "Advanced security measures to protect animal data and locations.",
    },
  ];

  return (
    <div className={styles.PointsCon}>
      {pointsData.map((point, index) => (
        <li key={index}>
          <Points ICON={point.ICON} TITLE={point.TITLE} DESC={point.DESC} />
        </li>
      ))}
    </div>
  );
};

export default Home_Points;