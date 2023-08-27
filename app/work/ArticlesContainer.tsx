import * as React from "react";
import Image from "next/image";
import styles from "./ArticlesContainer.module.css";
import Article from "./Article";
import Aside from "./Aside";
import ArticleSlider from "./ArticleSlider";

//TODO: Move all content to CMS
import articles from "../../data/articles.json";
import about from "../../data/about.json";

const ArticlesContainer = ({ locale }) => {
  const pageArticles = articles.filter((article) => article.locale === locale);
  const aboutArticle = about.find((item) => item.locale === locale);

  return (
    <div className={styles.ross_articles__container}>
      {(pageArticles ?? []).map((article, index) => (
        <Article key={article.title} header={article.title}>
          <ArticleSlider>
            {article.images.map((image) => (
              <div className={styles.embla__slide} key={image}>
                <Image
                  src={`/img/${image}`}
                  width={article.imageSize.width}
                  height={article.imageSize.height}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                  priority={index === 0}
                />
              </div>
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
      <Article
        className={styles.ross_article__about}
        header={aboutArticle?.title}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: aboutArticle?.text ?? "",
          }}
        />
      </Article>
    </div>
  );
};

export default ArticlesContainer;
