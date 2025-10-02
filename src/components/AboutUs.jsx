import styles from "../styles/AboutUs.module.css";
import Team from "./Team";
import KeyPoints from "./KeyPoints";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import { GiEarthAfricaEurope } from "react-icons/gi";
const AboutUs = () => {
  const {isLoggedIn} = useSelector((store)=>store.Login);
  if(!isLoggedIn){
    return <Navigate to="/login" replace />;
  }
  const Points = [
    {
      id: 1,
      No: "50+",
      Name: "Sepcies Tracked",
      Logo: <GiEarthAfricaEurope size={30} />,
    },
    {
      id: 2,
      No: "100+",
      Name: "Hotspots Indentify",
      Logo: <GiEarthAfricaEurope size={30} />,
    },
    {
      id: 3,
      No: "200+",
      Name: "Conservation Strategies Informed",
      Logo: <GiEarthAfricaEurope size={30} />,
    },
  ];
  return (
    <div className={`bg-dark ${styles.AboutUs}`}>
      <div className={styles.Header}>
        <h1 className={styles.Heading}>
          Our Mission: Protecting Wildlife with Technology
        </h1>
        <p className={styles.Desc}>
          We are dedicated to using innovative technology to monitor and protect
          endangered species amd their habitats.
        </p>
      </div>
      <div className={styles.Cont}>
        <div className={styles.AboutUsContent}>
          <h1 className={styles.Heading}>Our Story</h1>
          <p className={styles.Desc}>
            Founded in 2025, Wildlife Tracker was created to connect people with
            nature through technology. Our mission is simple – make it easier
            for everyone to observe, understand, and protect wildlife. What
            started as an idea is now a growing community working together for
            conservation.
          </p>
        </div>
        <div className={styles.AboutUsContent}>
          <h1 className={styles.Heading}>Our Team</h1>
          <p className={styles.Desc}>
            Behind Wildlife Tracker is a small but passionate team driven by the
            vision of connecting people with nature. With a mix of creativity,
            technology, and dedication, we are building a platform that makes
            wildlife observation and conservation accessible to everyone. A
            unique team where human passion meets AI support, working side by
            side to protect wildlife.
          </p>
          <div className={styles.TeamCon}>
            <Team
              Img={"/me.jpg"}
              Name={"Prince Daksh"}
              Role={"Founder & Developer"}
            />
            <Team Img={"/Ai.jpg"} Name={"Chat Gpt"} Role={"Ai Assistant"} />
          </div>
        </div>

        <div className={styles.AboutUsContent}>
          <h1 className={styles.Heading}>Our Impact</h1>
          <p className={styles.Desc}>
            <li>
              🌍 Connecting People with Nature – Making wildlife tracking
              accessible to everyone, from students to researchers.
            </li>

            <li>
              🐾 Supporting Conservation – Helping raise awareness about
              endangered species and their habitats.
            </li>

            <li>
              {" "}
              📊 Data for Good – Every observation adds valuable data that
              contributes to protecting wildlife.
            </li>

            <li>
              🤝 Building a Community – Creating a space where people share
              knowledge, inspire action, and work together for nature.
            </li>

            <li>
              🌱 Future Generations – Spreading awareness to ensure that
              wildlife and natural habitats thrive for years to come.
            </li>
          </p>
        </div>
      </div>
      <div className={styles.Points}>
        {Points.map((point) => {
          return (
            <KeyPoints
              key={point.id}
              No={point.No}
              Name={point.Name}
              Logo={point.Logo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AboutUs;
