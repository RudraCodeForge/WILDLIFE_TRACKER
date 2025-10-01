import styles from "../styles/SpecieDetails.module.css";
import ImageSlider from "./ImageSlider";
import RecentActivity from "./ActivityTrend";
import BDetails from "./BDetails";
import SData from "./SData";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
const SpecieDetails = () => {
  const {Role,isLoggedIn} = useSelector((store)=>store.SignUp);
  if(!isLoggedIn){
    return <Navigate to="/login" replace />;
  }
  const activityData = [
    { day: "Jan", value: 398000 },
    { day: "Feb", value: 120000 },
    { day: "Mar", value: 175000 },
    { day: "Apr", value: 380100 },
    { day: "May", value: 412000 },
    { day: "Jun", value: 465000 },
  ];
  const totalMax = 465000;
  const firstValue = activityData[0].value;
  const lastValue = activityData[activityData.length - 1].value;
  const difference = lastValue - firstValue;
  const Percent = (difference / firstValue) * 100;
  const PercentRounded = Percent.toFixed(1);
  const Check = PercentRounded >= 0;
  const displayPercent = (Check ? "+" : "") + PercentRounded + "%";

  const elephantImages = [
    "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    "https://images.unsplash.com/photo-1544211412-2a32426e7fd5",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  ];

  const SpecieData = [
    {
      id: 1,
      Name: "Habitat",
      Value: `African elephants inhabit a variety of climates, including savannas, grasslands, forests, and deserts. They require access to water and large amounts of vegetation for sustenance.`,
    },
    {
      id: 2,
      Name: "Geographic Range",
      Value: `Found across sub-Saharan Africa, from the southern edge of the Sahara Desert to the northern parts of South Africa. Their range has been significantly reduced due to habitat loss and poaching.`,
    },
    {
      id: 3,
      Name: "Primary Threats",
      Value: `Poaching for ivory is the most significant threat to African elephants. Habitat loss due to agricultural expansion and human settlements also poses a major challenge.`,
    },
    {
      id: 4,
      Name: "Conservation Efforts",
      Value: `Conservation efforts include anti-poaching patrols, habitat protection and restoration, community engagement, and international trade regulations.`,
    },
  ];

  const BasicDetails = [
    {
      id: 1,
      Name: "Scientific Name",
      Value: "Loxodonta africana",
    },
    {
      id: 2,
      Name: "Conservation Status",
      Value: "Vulnerable",
    },
    {
      id: 3,
      Name: "Population Estimate",
      Value: lastValue,
    },
  ];

  return (
    <div className="bg-dark pb-5 ">
      <h1 className="text-white pt-3 pb-4">African Elephant</h1>

      <div className={styles.MainContentWrapper}>
        <div className={styles.ImageAndStatsWrapper}>
          <div className={styles.ImageWrapper}>
            <ImageSlider images={elephantImages} />
          </div>

          <div className={styles.HorizontalStatsGrid}>
            {BasicDetails.map((detail) => (
              <BDetails
                key={detail.id}
                Name={detail.Name}
                Value={detail.Value}
              />
            ))}
          </div>

          {Role === "admin" && (
            <div className={styles.HorizontalStatsGrid}>
              <div className={styles.btncon}>
                <Link to="#" className={styles.BTN}>
                  Edit Info
                </Link>
                <Link to="#" className={styles.BTN1}>
                  Delete Species
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className={styles.SDataAndTrendGrid}>
          <div className={styles.SDataGrid}>
            {SpecieData.map((data) => (
              <div key={data.id} className={`${styles.Con} ${styles.SDataBox}`}>
                <SData Name={data.Name} Value={data.Value} />
              </div>
            ))}
          </div>

          <div className={`${styles.Con} ${styles.TrendChart}`}>
            <RecentActivity
              name={"Population Trends"}
              check={Check}
              desc={`${displayPercent} Last 6 Months`} // Updated to 6 months as per data
              activityData={activityData}
              totalMax={totalMax}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecieDetails;
