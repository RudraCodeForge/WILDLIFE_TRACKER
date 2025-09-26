import styles from "../styles/SpeciesList.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import Species from "./Species";
import { Link } from "react-router-dom";
const SpeciesList = () => {
  const Role = "admin";
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
      Name: "Tiger",
      ScientificName: "Panthera tigris",
      Status: "Endangered",
    },
    {
      id: 3,
      Image: "/me.jpg",
      Name: "Elephant",
      ScientificName: "Loxodonta africana",
      Status: "Critical",
    },
    {
      id: 4,
      Image: "/me.jpg",
      Name: "Giant Panda",
      ScientificName: "Ailuropoda melanoleuca",
      Status: "Vulnerable",
    },
    {
      id: 5,
      Image: "/me.jpg",
      Name: "Snow Leopard",
      ScientificName: "Panthera uncia",
      Status: "Vulnerable",
    },
    {
      id: 6,
      Image: "/me.jpg",
      Name: "Blue Whale",
      ScientificName: "Balaenoptera musculus",
      Status: "Endangered",
    },
    {
      id: 7,
      Image: "/me.jpg",
      Name: "Red Panda",
      ScientificName: "Ailurus fulgens",
      Status: "Endangered",
    },
  ];
  return (
    <div className={`bg-dark ${styles.container}`}>
      <h1 className={styles.Heading}>Tracked Species</h1>
      {species.map((species) => {
        return (
          <Species
            key={species.id}
            Image={species.Image}
            Name={species.Name}
            ScientificName={species.ScientificName}
            Status={species.Status}
            Link={`/species/${species.id}`}
            LinkName={"View Details →"}
          />
        );
      })}
      {Role === "admin" && (
        <div className={styles.AddBtnCon}>
          <Link to="/add-species" className={styles.AddBtn}>
            <IoMdAddCircleOutline size={30} /> Add Species
          </Link>
        </div>
      )}
    </div>
  );
};
export default SpeciesList;
