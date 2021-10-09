import Image from "next/image";
import Article from "../Article/Article";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";
import Aside from "../Article/Aside";

import image1 from "../../public/img/case/spotlesscomeback/screen1.png";

export const ArticleACO = () => {
  return (
    <Article header="ACO - Spotless Comeback">
      <ArticleSlider>
        <ArticleSlide>
          <Image src={image1} layout="responsive" alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        ACO lanserade 2009 sin nya produktserie mot finnar. Spelet var
        huvuddelen i en kampanj där man besegrar mobbare med kraftfulla
        comebacks. Många priser låg i potten och kampanjen vann guld och silver
        i Eurobest.
      </p>
      <p>
        Jag har gjort all utveckling Forntend (AS3) samt ett enkelt CMS Backend
        (.NET) som hanterar de ca 100+ olika fraser och comebacks som används i
        spelet. Musiken använder sig av{" "}
        <a href="http://www.dinahmoe.com/" target="_blank" rel="noreferrer">
          Dinahmoes
        </a>{" "}
        ljudmotor som jag integrerar och synkar med princip allt rörligt i
        spelet.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>AS3</p>
        <h3>Webbsida:</h3>
        <p>
          <a
            href="http://www.spotlesscomeback.com/tavling/"
            target="_blank"
            rel="noreferrer"
          >
            www.spotlesscomeback.com/tavling
          </a>
        </p>
      </Aside>
    </Article>
  );
};
