import styles from "../styles/Overview.module.css";
import Species from "./Species";
import { useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
const TrackedAnimals = () => {
  const location = useLocation().pathname;

  const species = [
    {
      id: 1,
      Image: "/me.jpg",
      Name: "Lion",
      ScientificName: "Panthera leo",
      Status: "Critical",
    },
    {
      id: 2,
      Image: "/me.jpg",
      Name: "Elephant",
      ScientificName: "Loxodonta africana",
      Status: "Critical",
    },
    {
      id: 3,
      Image: "/me.jpg",
      Name: "Giant Panda",
      ScientificName: "Ailuropoda melanoleuca",
      Status: "Vulnerable",
    },
    {
      id: 4,
      Image: "/me.jpg",
      Name: "Red Panda",
      ScientificName: "Ailurus fulgens",
      Status: "Endangered",
    },
  ];

  const missions = [
    {
      id: 1,
      Image: "/me.jpg",
      Name: "Amazon Rainforest Expedition",
      ScientificName: (<span style={{ display: "flex",gap: "2px" }}>
          <FaLocationDot />
          Amazon Rainforest, Brazil
        </span>),
      Status: "7 days",
    },
  ];

  return (
    <div className={styles.OverviewCon}>
      {location === "/profile/tracked-animals"
        ? species.map((species) => (
            <Species
              key={species.id}
              Image={species.Image}
              Name={species.Name}
              ScientificName={species.ScientificName}
              Status={species.Status}
              Link={`/species/${species.id}`}
              LinkName={"View Details →"}
            />
          ))
        : missions.map((mission) => (
            <Species
              key={mission.id} 
              Image={mission.Image}
              Name={mission.Name}
              ScientificName={mission.ScientificName}
              Status={mission.Status}
              Link={`/mission/${mission.id}`}
              LinkName={"View Mission →"}
            />
          ))}
    </div>
  );
};

export default TrackedAnimals;