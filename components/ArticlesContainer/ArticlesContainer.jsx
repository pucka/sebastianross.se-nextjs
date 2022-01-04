import * as React from "react";
import About from "../About/About";
import styles from "./ArticlesContainer.module.scss";
import articles from "../../data/articles.json";
import { useRouter } from "next/router";
import Article from "../Article/Article";
import Aside from "../Article/Aside";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";
import Image from "next/image";

//TODO: Move all content to CMS
const ArticlesContainer = () => {
  const { locale } = useRouter();
  return (
    <div className={styles.ross_articles__container}>
      {articles
        .filter((article) => article.locale === locale)
        .map((article) => (
          <Article key={article.title} header={article.title}>
            <ArticleSlider>
              {article.images.map((image) => (
                <ArticleSlide key={image}>
                  <Image
                    src={`/img/${image}`}
                    width={article.imageSize.width}
                    height={article.imageSize.height}
                    layout="responsive"
                    alt=""
                  />
                </ArticleSlide>
              ))}
            </ArticleSlider>
            <div dangerouslySetInnerHTML={{ __html: article.text }} />
            <Aside>
              {Object.entries(article.aside).map(([key, content], index) => (
                <React.Fragment key={index}>
                  <h3>{key}</h3>
                  <p dangerouslySetInnerHTML={{ __html: content }} />
                </React.Fragment>
              ))}
            </Aside>
          </Article>
        ))}
      <About locale={locale} />
    </div>
  );
};

export default ArticlesContainer;
