import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.ross_footer}>
      <p>
        <small>&copy; Sebastian Ross {new Date().getFullYear()}</small>
      </p>
      <p>
        <small>sebbeross[at]gmail.com</small>
      </p>
    </footer>
  );
};

export default Footer;
