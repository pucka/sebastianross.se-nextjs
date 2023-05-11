import Header from "./Header";
import ArticlesContainer from "./ArticlesContainer";
import styles from './page.module.css';

export default function Work() {
    return (
        <>
            <div className={styles.ross_main__container}>
                <Header />
                <ArticlesContainer locale="sv" />
            </div>
            <footer className={styles.ross_footer}>
                <p>
                    <small>&copy; Sebastian Ross {new Date().getFullYear()}</small>
                </p>
                <p>
                    <small>sebbeross[at]gmail.com</small>
                </p>
            </footer>
        </>
    );
}