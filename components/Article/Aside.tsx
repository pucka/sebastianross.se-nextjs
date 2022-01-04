import classNames from "classnames";
import styles from "./Aside.module.scss";

const Aside = ({ children }) => {
  return (
    <aside className={classNames("clearfix", styles.ross_article__aside)}>
      {children}
    </aside>
  );
};

export default Aside;
