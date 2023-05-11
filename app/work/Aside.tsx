import classNames from "classnames";
import styles from "./Aside.module.css";

const Aside = ({ children }) => {
  return (
    <aside className={classNames("clearfix", styles.ross_article__aside)}>
      {children}
    </aside>
  );
};

export default Aside;
