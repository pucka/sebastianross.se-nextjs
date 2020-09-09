import Head from 'next/head';
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import ArticlesContainer from "../components/ArticlesContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Ross - Utvecklare</title>
        <meta name="description" content="Utvecklare med fokus på webb." />
      </Head>
      <div key="main" className="ross_container">
        <MainHeader />
        <ArticlesContainer />
      </div>
      <Footer key="footer" />
    </>
  );
}
