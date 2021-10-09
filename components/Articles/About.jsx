import Article from "../Article/Article";
import styles from "./About.module.scss";

const About = () => {
  return (
    <Article className={styles["ross_article--about"]} header="Om mig">
      <p>
        Hej, mitt namn är Sebastian Ross och jag är webbutvecklare. Kontakta mig
        gärna på sebbeross[at]gmail.com om det är något du undrar.
        <br /> /Sebastian
      </p>
    </Article>
  );
};

export default About;
