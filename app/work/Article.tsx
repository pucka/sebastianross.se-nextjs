import classNames from "classnames";
import styles from "./Article.module.css";

interface IArticleProps {
  header?: string;
  children: React.ReactNode;
  className?: string;
}
const Article: React.FC<IArticleProps> = ({ header, className, children }) => {
  return (
    <article className={classNames(styles.ross_article, className)}>
      <header className={styles.ross_article__header}>
        <h2 className={styles.ross_article__title}>{header}</h2>
      </header>
      {children}
    </article>
  );
};

export default Article;
