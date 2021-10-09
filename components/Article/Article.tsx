import classNames from "classnames";
import styles from "./Article.module.scss";

const Article = ({ header, className, children }) => {
  return (
    <article className={classNames(styles.ross_article, className)}>
      <header className={styles.ross_article__header}>
        <h2>{header}</h2>
      </header>
      {children}
    </article>
  );
};

export default Article;
