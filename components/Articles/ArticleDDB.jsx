import Image from "next/image";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";
import Article from "../Article/Article";
import Aside from "../Article/Aside";

import image2 from "../../public/img/case/ddb/2.jpg";
import image1 from "../../public/img/case/ddb/1.jpg";

export const ArticleDDB = () => {
  return (
    <Article header="DDB.se">
      <ArticleSlider>
        <ArticleSlide>
          <Image src={image2} layout="responsive" alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image src={image1} layout="responsive" alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        DDB gjorde om sin företagssida i början av 2012 och valde då att göra en
        responsiv sida med ett enkelt CMS som lätt ska kunna lokaliseras då alla
        DDB-kontor i norden skulle använda samma mall. Detta gjordes som ett
        tema till Wordpress då dessa är enkla att installera och uppdatera.
      </p>
      <p>
        Sidan kombinerar CSS transitions med JS för en optimal upplevelse
        oavsett vilken enhet du använder. Att använda sajten på en iPad ska vara
        minst lika enkelt som på en dator.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>HTML5, JS, CSS, PHP / WordPress, jQuery</p>
        <h3>Webbsida:</h3>
        <p>
          <a href="http://ddb.se" target="_blank" rel="noreferrer">
            ddb.se
          </a>
        </p>
      </Aside>
    </Article>
  );
};
