import Image from "next/image";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import Article from "../Article/Article";

import image1 from "../../public/img/case/familjekompositoren/screen1.png";
import image2 from "../../public/img/case/familjekompositoren/screen2.png";
import image3 from "../../public/img/case/familjekompositoren/screen3.png";
import image4 from "../../public/img/case/familjekompositoren/screen4.png";
import Aside from "../Article/Aside";
import ArticleSlide from "../ArticleSlider/ArticleSlide";

export const ArticleSkoda = () => {
  return (
    <Article header="Skoda - Familjekompositören">
      <ArticleSlider>
        <ArticleSlide>
          <Image layout="responsive" src={image1} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" src={image2} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" src={image3} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" src={image4} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        En kampanj där syftet var att promota Skodas familjebilar. Analyserar
        din Spotify Topplista eller Spotify spellista för att matcha det med
        andra personer. En topplista presenteras med de personer som du har mest
        gemensamma låtar/artister med.
      </p>
      <p>
        Projektet krävde även att jag byggde en enklare webserver med ett
        REST-API i C. Detta för att kunna skapa Spotify-spellistor dynamiskt
        samt hämta ut en användares toplistor med hjälp Spotifys C-bibliotek
        Libspotify.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>C,PHP,HTML5 / Libspotify, jQuery, Facebook Graph API</p>
        <h3>Demo:</h3>
        <p>
          <a
            href="http://sites.adqualifier.com/skoda/familjekompositoren/"
            target="_blank"
            rel="noreferrer"
          >
            www.familjekompositoren.se
          </a>
        </p>
      </Aside>
    </Article>
  );
};
