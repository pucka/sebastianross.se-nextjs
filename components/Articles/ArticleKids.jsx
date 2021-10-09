import Image from "next/image";
import Article from "../Article/Article";
import Aside from "../Article/Aside";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import ArticleSlide from "../ArticleSlider/ArticleSlide";

import snoffe1 from "../../public/img/case/snoffe/1.png";
import snoffe2 from "../../public/img/case/snoffe/2.png";
import snoffe3 from "../../public/img/case/snoffe/3.png";

export const ArticleKids = () => {
  return (
    <Article header="Barnkanalen - Snoffe, döden & jag">
      <ArticleSlider>
        <ArticleSlide>
          <Image layout="responsive" src={snoffe1} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" src={snoffe2} alt="" />
        </ArticleSlide>
        <ArticleSlide>
          <Image layout="responsive" src={snoffe3} alt="" />
        </ArticleSlide>
      </ArticleSlider>
      <p>
        <strong>Snoffe, döden &amp; jag</strong> är ett program på{" "}
        <a
          href="http://www.svt.se/barnkanalen/snoffe_doden_och_jag/"
          target="_blank"
          rel="noreferrer"
        >
          Barnkanalen
        </a>
        som handlar om barn/ungdomar som har haft husdjur som gått bort. Som ett
        komplement till programmet så gjordes en applikation till webben där
        tittarna kan ladda upp bilder på sina egna husdjur som gått bort. Dessa
        hamnar då i en digital himmel.
      </p>
      <p>
        Applikation fungerar på de flesta enheter i och med att den är
        responsiv. Den förlitar sig även mycket på feature detection. Modernare
        webbläsare med stöd för CSS 3D får en mer avancerad version där ett
        3d-djup gör att himlen känns ännu mer levande.
      </p>
      <Aside>
        <h3>Roll:</h3>
        <p>Lead Developer</p>
        <h3>Språk/Ramverk:</h3>
        <p>
          HTML5 (CSS 3D-Transforms, CSS Animations, Canvas, Local Storage), Java
          / jQuery, SASS, GSAP, Play Framework 2
        </p>
        <h3>Webbsida:</h3>
        <p>
          <a href="demos/snoffe/index.html?fakedata=1&fakeupload=1" target="_blank">
            Demo
          </a>
        </p>
      </Aside>
    </Article>
  );
};
