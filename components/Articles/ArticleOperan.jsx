import Image from "next/image";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import Article from "../Article/Article";

import image1 from "../../public/img/case/operasoap/screen1.png";
import Aside from "../Article/Aside";
import ArticleSlide from "../ArticleSlider/ArticleSlide";

export const ArticleOperan = () => {
  return (
    <Article header="Operan - Opera Soap">
      <ArticleSlider>
        <ArticleSlide>
          <Image layout="responsive" src={image1} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        En minisajt för att promota Opera Soap, en tvål sponsrad av Kungliga
        Operan. Sidan är Responsive och fungerar på alla typer av
        skärmstorlekar.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>HTML, AS3 / jQuery</p>
        <h3>Webbsida:</h3>
        <p>
          <a href="http://operasoap.se/" target="_blank" rel="noreferrer">
            www.operasoap.se
          </a>
        </p>
      </Aside>
    </Article>
  );
};
