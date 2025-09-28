import styles from "../styles/SpecieDetails.module.css";
import ImageSlider from "./ImageSlider";
import RecentActivity from "./ActivityTrend";
import BDetails from "./BDetails";
import SData from "./SData";
const SpecieDetails = () => {
  const activityData = [
    { day: "Jan", value: 398000 },
    { day: "Feb", value: 120000 },
    { day: "Mar", value: 175000 },
    { day: "Apr", value: 380100 },
    { day: "May", value: 412000 },
    { day: "Jun", value: 395000 },
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
      Value: `African elephants are the largest land animals on Earth, and they are
          mainly found in sub-Saharan Africa. Their habitats vary widely
          depending on the region and availability of food and water. They live
          in savannas, grasslands, forests, and deserts.`,
    },
    {
      id: 2,
      Name: "Geographic Range",
      Value: `African elephants are found across sub-Saharan Africa, from West Africa to East and Southern Africa. They live in a variety of habitats, including savannas, grasslands, forests, and some desert regions. Their range depends on the availability of food, water, and suitable shelter, so they are mostly found near rivers, lakes, and areas with abundant vegetation.
      `,
    },
    {
      id: 3,
      Name: "Primary Threats",
      Value: `African elephants face several threats that endanger their survival. The main threats include poaching for ivory, loss of habitat due to farming, logging, and human settlements, and human-elephant conflicts when elephants raid crops. Climate change and droughts also affect their access to water and food, making survival even harder.
      `,
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
      Name: "Status",
      Value: "Vulnerable",
    },
    {
      id: 3,
      Name: "Population Estimate",
      Value: "415,000",
    },
  ];
  return (
    <div className="container bg-dark pb-3 ">
      <h1>African Elephant</h1>
      <ImageSlider images={elephantImages} />
      <div className={styles.Con}>
        {BasicDetails.map((detail) => {
          return (
            <BDetails key={detail.id} Name={detail.Name} Value={detail.Value} />
          );
        })}
      </div>

      {SpecieData.map((data) => {
        return <SData key={data.id} Name={data.Name} Value={data.Value} />;
      })}
      <div className={styles.Con}>
        <RecentActivity
          name={"Population Trend"}
          check={Check}
          desc={`${displayPercent} In Last 6 Months`}
          activityData={activityData}
          totalMax={totalMax}
        />
      </div>
    </div>
  );
};
export default SpecieDetails;
