import Head from "next/head";
import MainHeader from "../components/Header/MainHeader";
import Footer from "../components/Footer/Footer";
import ArticlesContainer from "../components/ArticlesContainer/ArticlesContainer";
import MainContainer from "../components/MainContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Ross - Utvecklare</title>
        <meta name="description" content="Utvecklare med fokus på webb." />
      </Head>
      <MainContainer>
        <MainHeader />
        <ArticlesContainer />
      </MainContainer>
      <Footer />
    </>
  );
}
