import Article from "../Article/Article";
import data from "../../data/about.json";
import styles from "./About.module.scss";

interface AboutProps {
  locale: String;
}

const About = ({ locale }: AboutProps) => {
  const about = data.find((item) => item.locale === locale);
  return (
    <Article className={styles["ross_article--about"]} header={about.title}>
      <div
        dangerouslySetInnerHTML={{
          __html: about.text,
        }}
      />
    </Article>
  );
};

export default About;
