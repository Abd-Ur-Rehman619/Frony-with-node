import styles from "./About.module.css";
import storyImg from "../../assets/story-pic.png";
import SiteInformation from "../../Components/SiteInformation";
import ServicesComponent from "../../Components/ServicesComponent";
import PersonsInfo from "../../Components/PersonsInfo";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.outStory}>
          <div className={styles.story}>
            <p className="text-5xl font-bold">Our Story</p>
            <p>
              Launched in 2024, Forny is South Asia’s premier online shoes
              market place with an active presence in Dubai. Supported by wide
              range of tailored marketing, data and service solutions, Forny has
              10,500 sellers and 300 brands and serves 3 millions customers
              across the region.{" "}
            </p>
            <p>
              Frony has more than 1 Million products to offer, growing at a very
              fast. Forny offers a diverse assessment in categories ranging from
              consumer.
            </p>
          </div>

          <div className={styles.storyImage}>
            <img src={storyImg} />
          </div>
        </div>
        <div className=" flex justify-center mt-32">
          <SiteInformation />
        </div>

        <div className="flex justify-center mt-32">
          <PersonsInfo />
        </div>

        <div className="flex justify-center mt-32">
          <ServicesComponent />
        </div>
      </main>
    </>
  );
}
