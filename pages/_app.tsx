import Head from "next/head";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
