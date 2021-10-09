import styles from "./ArticleSlide.module.scss";

const ArticleSlide = ({ children }) => (
  <div className={styles.embla__slide}>{children}</div>
);

export default ArticleSlide;
