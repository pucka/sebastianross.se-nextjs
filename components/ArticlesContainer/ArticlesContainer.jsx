/*global window, Event, setTimeout*/
import {
  ArticleSvtPlay,
  ArticleSvtFlow,
  ArticleSvtNews,
  ArticleKids,
  ArticleDDB,
  ArticleVolkswagen,
  ArticleSkoda,
  ArticleForsvarsmakten,
  ArticleOperan,
  ArticleACO,
} from "../Articles";
import About from "../Articles/About";
import styles from "./ArticlesContainer.module.scss";

//TODO: Move all content to CMS
const ArticlesContainer = () => (
  <div className={styles.ross_articles__container}>
    <ArticleSvtPlay />
    <ArticleSvtFlow />
    <ArticleSvtNews />
    <ArticleKids />
    <ArticleDDB />
    <ArticleVolkswagen />
    <ArticleSkoda />
    <ArticleForsvarsmakten />
    <ArticleOperan />
    <ArticleACO />
    <About />
  </div>
);

export default ArticlesContainer;
