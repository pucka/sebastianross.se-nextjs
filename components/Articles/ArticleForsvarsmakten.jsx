import Image from "next/image";
import ArticleSlider from "../ArticleSlider";
import Article from "../Article/Article";

import image1 from "../../public/img/case/testvarverklighet/screen1.png";
import image2 from "../../public/img/case/testvarverklighet/screen2.png";
import image3 from "../../public/img/case/testvarverklighet/screen3.png";
import image4 from "../../public/img/case/testvarverklighet/screen4.png";
import image5 from "../../public/img/case/testvarverklighet/screen5.png";
import image6 from "../../public/img/case/testvarverklighet/screen6.png";
import image7 from "../../public/img/case/testvarverklighet/screen7.png";
import Aside from "../Article/Aside";

export const ArticleForsvarsmakten = () => {
  return (
    <Article header="Försvarsmakten - Test: Vår verklighet">
      <ArticleSlider>
        <div>
          <Image layout="responsive" src={image1} alt="" />
        </div>
        <div>
          <Image layout="responsive" src={image2} alt="" />
        </div>
        <div>
          <Image layout="responsive" src={image3} alt="" />
        </div>
        <div>
          <Image layout="responsive" src={image4} alt="" />
        </div>
        <div>
          <Image layout="responsive" src={image5} alt="" />
        </div>
        <div>
          <Image layout="responsive" src={image6} alt="" />
        </div>
        <div>
          <Image layout="responsive" src={image7} alt="" />
        </div>
      </ArticleSlider>
      <p>
        En Facebook App där man bildar bildar ett lag med 7 av sina vänner. Man
        ska sedan lösa pussel samt svara på frågor om sina kompisar som rör
        deras aktivitet på Facebook. Lagen tävlar sedan om att va den bästa
        gruppen på topplistan som baseras på lagets totala poäng samt tid.
      </p>
      <p>
        Detta är en flashapplikation som drar nytta av många metoder i Facebook
        Graph API. Utmaningen låg dels i att göra de små spelen enkla men
        utmanande samt att filtrera ut väsentlig FB -data från de tävlande
        laget. Jag har varit med och utvecklat flash-delen samt byggt hela
        Facebook-integrationen.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>AS3,PHP / Facebook Graph API</p>
        <h3>Webbsida:</h3>
        <p>
          <a
            href="http://apps.facebook.com/test-var-verklighet/"
            target="_blank"
            rel="noreferrer"
          >
            apps.facebook.com/test-var-verklighet/
          </a>
        </p>
      </Aside>
    </Article>
  );
};
