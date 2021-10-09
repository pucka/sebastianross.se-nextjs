import Image from "next/image";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";
import Article from "../Article/Article";
import Aside from "../Article/Aside";

import image1 from "../../public/img/case/bitforbit/screen1.png";
import image2 from "../../public/img/case/bitforbit/screen2.png";
import image3 from "../../public/img/case/bitforbit/screen3.png";

export const ArticleVolkswagen = () => {
  return (
    <Article header="Volkswagen - Bit för bit">
      <ArticleSlider>
        <ArticleSlide>
          <Image placeholder="blur" layout="responsive" src={image1} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image placeholder="blur" layout="responsive" src={image2} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image placeholder="blur" layout="responsive" src={image3} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        Nya Volkswagen Beetle lanserades med en två veckors kampanj där en
        lycklig vinnare vann en Beetle. Med hjälp av ledtrådar utspridda på
        diverse bloggar, minisajter samt facebook skulle man samla delar för att
        bygga ihop en digital Beetle.
      </p>
      <p>
        Sajten byggdes i en desktop och en mobil variant med kravet att de inte
        skulle skilja i funktionalitet. Mycket tid lades ner på att hålla hög
        säkerhet. Sajterna höll hög teknisk kvalitet och utnyttjade bl.a History
        API, CSS Transitions samt helt AJAX baserade sidvisningar.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>PHP, HTML5 / jQuery, History.js, Facebook Graph API, Hybridauth</p>
        <h3>Webbsida:</h3>
        <p>
          Finns ej (Kampanjen varade endast i två veckor och plockades sedan
          ner)
        </p>
      </Aside>
    </Article>
  );
};
