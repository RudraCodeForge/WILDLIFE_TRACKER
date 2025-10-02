import styles from "../styles/Home_Points.module.css";
import Points from "./Points";
import { AiOutlineEnvironment, AiOutlineSafety } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";

const iconMap = {
  AiOutlineEnvironment: AiOutlineEnvironment,
  BiBarChartSquare: BiBarChartSquare,
  AiOutlineSafety: AiOutlineSafety,
};

const Home_Points = ({ PointsData }) => {
  return (
    <div className={styles.PointsCon}>
      {PointsData.map((point, index) => {
        const IconComponent = iconMap[point.ICON]; // string -> actual component
        return (
          <li key={index}>
            <Points
              ICON={IconComponent}  // pass the actual component
              TITLE={point.TITLE}
              DESC={point.DESC}
            />
          </li>
        );
      })}
    </div>
  );
};

export default Home_Points;