import styles from "./Header.module.css";
import GuthubLogo from "../../public/img/logos/github.png";
import LinkedinLogo from "../../public/img/logos/linkedin.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles["ross_header-main"]} role="banner">
      <h1 className={styles["ross_header-main__h1"]}>Sebastian Ross</h1>
      <div className={styles.ross_header__logos}>
        <a
          className={styles.ross_header__logo}
          href="https://github.com/pucka"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={GuthubLogo} alt="Github" width="32" height="32" />
        </a>
        <a
          className={styles.ross_header__logo}
          href="https://www.linkedin.com/in/sebastianr0ss/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LinkedinLogo} width="64" height="64" alt="LinkedIn" />
        </a>
      </div>
    </header>
  );
};

export default Header;
