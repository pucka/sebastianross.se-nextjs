import styles from "./MainHeader.module.scss";

const Header = () => {
  return (
    <header className={styles["ross_header-main"]} role="banner">
      <h1 className={styles["ross_header-main__h1"]}>Sebastian Ross</h1>
    </header>
  );
};

export default Header;
