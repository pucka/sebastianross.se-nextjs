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
} from "./Articles";
import About from "./About.jsx";

//TODO: Move all content to CMS
const ArticlesContainer = () => (
  <div className="ross_main">
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
