import Image from "next/image";
import Article from "../Article/Article";
import Aside from "../Article/Aside";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";

import image1 from "../../public/img/case/svtplay/screen1.jpg";
import image2 from "../../public/img/case/svtplay/screen2.jpg";
import image3 from "../../public/img/case/svtplay/screen3.jpg";

export const ArticleSvtPlay = () => {
  return (
    <Article header="SVT Play">
      <ArticleSlider>
        <ArticleSlide>
          <Image layout="responsive" placeholder="blur" src={image1} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" placeholder="blur" src={image2} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" placeholder="blur" src={image3} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        <strong>SVT Play</strong> har genomgått en totalrenovering när det
        gäller utvecklingplattform. Tidigare var <strong>svtplay.se</strong>{" "}
        byggt med Java-ramverket{" "}
        <a
          href="https://www.playframework.com/"
          target="_blank"
          rel="noreferrer"
        >
          Play Framework
        </a>{" "}
        med ett MVC-liknande upplägg. Det blev snabbt ganska komplext och svårt
        för icke-insatta utvecklare att fortsätta bygga vidare på den
        plattformen. Samtidigt började många andra intressanta alternativ dyka
        upp. Vi bestämde oss för att bytta hela stacken och köra Javascript hela
        vägen.{" "}
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
          Node.js
        </a>{" "}
        får agera server och{" "}
        <a
          href="https://facebook.github.io/react/"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
        sköter renderingen. Både på serversidan som hos klientsidan (Universal
        Javascript) . I och med React använder vi även{" "}
        <a
          href="https://facebook.github.io/flux/"
          target="_blank"
          rel="noreferrer"
        >
          Flux
        </a>{" "}
        för applikationens dataflöde.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>Javascript / Node.js, React, Fluxible, Redux</p>
        <h3>Länkar:</h3>
        <p>
          <a href="http://www.svtplay.se" target="_blank" rel="noreferrer">
            www.svtplay.se
          </a>
        </p>
      </Aside>
    </Article>
  );
};
