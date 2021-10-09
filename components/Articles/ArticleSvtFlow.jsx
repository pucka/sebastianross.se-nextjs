import Image from "next/image";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";
import Article from "../Article/Article";
import Aside from "../Article/Aside";

import image1 from "../../public/img/case/svtflow/screen1.jpg";
import image2 from "../../public/img/case/svtflow/screen2.jpg";

export const ArticleSvtFlow = () => {
  return (
    <Article header="SVT Flow">
      <ArticleSlider>
        <ArticleSlide>
          <Image layout="responsive" src={image1} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" src={image2} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        SVT lanserar ett nytt sätt att se på TV online. Kombinera TVns
        sträcktittning med online-tjänsters valfrihet i en snygg paketering så
        har du SVT Flow. All videos visas i en overlay som täcker hela
        webbläsaren för att ge en mer tv-känsla.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>
          Java, Javascript / Play Framework, Require.js, Jasmine, jQuery,
          History.js
        </p>
        <h3>Länkar:</h3>
        <p>
          <a href="http://www.svtflow.se" target="_blank" rel="noreferrer">
            www.svtflow.se
          </a>{" "}
          (site cancelled 2015)
        </p>
      </Aside>
    </Article>
  );
};
