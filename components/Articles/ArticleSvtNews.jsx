import Image from "next/image";
import Article from "../Article/Article";
import Aside from "../Article/Aside";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";

import image1 from "../../public/img/case/svtnyheter/1.jpg";

export const ArticleSvtNews = () => {
  return (
    <Article header="SVT Nyheter - Nyhetsapp">
      <ArticleSlider>
        <ArticleSlide>
          <Image placeholder="blur" layout="responsive" src={image1} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        I samband med omgörningen av SVTs nyhetswebb skulle det även släppas en
        wrapperapp för <b>iOS</b>, <b>Windows Phone</b> och <b>Android</b>.
        Förutom att kunna använda sajten skulle det även finnas en
        bokmärkesfunktion, delning och pushnotiser. Min uppgift var att göra
        Windows Phone-appen och även hjälpa till med iOS-appen.
      </p>
      <p>
        Den stora utmaningen i det här projektet var att synkronisera
        pushnotiserna så att redaktörer skulle slippa sitta och göra tre olika
        pushsessioner varje gång de ville få ut en notis. Till hjälp använde vi{" "}
        <a href="http://urbanairship.com" target="_blank" rel="noreferrer">
          Urban Airship
        </a>{" "}
        som tillhandahåller verktyg för att kunna skicka pushnotiser till de tre
        plattformarna. Med deras API byggde vi en panel i nyheternas CMS där de
        snabbt och enkelt kan droppa artiklar som de vill ska pushas till appen.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer (Windows Phone), Developer (iOS)</p>
        <h3>Språk/Ramverk:</h3>
        <p>C#, Objective-C / .NET (Visual Studio), X-Code, Urban Airship</p>
        <h3>Länkar:</h3>
        <p>
          <a
            href="http://www.windowsphone.com/sv-se/store/app/svt-nyheter/fc1c3d88-1d99-4489-aa3b-751948a431b5"
            target="_blank"
            rel="noreferrer"
          >
            Windows Phone
          </a>
          ,
          <a
            href="https://itunes.apple.com/se/app/svt-nyheter/id735240056?mt=8"
            target="_blank"
            rel="noreferrer"
          >
            iPhone
          </a>
        </p>
      </Aside>
    </Article>
  );
};
