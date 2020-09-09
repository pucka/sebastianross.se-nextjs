import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import ArticlesContainer from '../components/ArticlesContainer';

export default function Home() {
  return (
    <>
      <div key="main" className="ross_container">
        <MainHeader />
        <ArticlesContainer />
      </div>
      <Footer key="footer" />
    </>
  );
}
