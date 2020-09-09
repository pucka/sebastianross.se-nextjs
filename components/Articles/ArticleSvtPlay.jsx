import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleSvtPlay = () => {
    return (
        <Article header="SVT Play">
            <ArticleSlider>
                <div>
                    <img src="/img/case/svtplay/screen1.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/case/svtplay/screen2.jpg" alt="" />
                </div>
                <div>
                    <img src="/img/case/svtplay/screen3.jpg" alt="" />
                </div>
            </ArticleSlider>
            <p>
                <strong>SVT Play</strong> har genomgått en totalrenovering när det gäller utvecklingplattform.
                Tidigare var <strong>svtplay.se</strong> byggt med Java-ramverket <a href="https://www.playframework.com/">Play Framework</a>
                med ett MVC-liknande upplägg. Det blev snabbt ganska komplext och svårt för icke-insatta utvecklare att fortsätta bygga vidare
                på den plattformen. Samtidigt började många andra intressanta alternativ dyka upp. Vi bestämde oss för att bytta hela stacken och köra
                Javascript hela vägen. <a href="https://nodejs.org/">Node.js</a> får agera server och <a href="https://facebook.github.io/react/">React</a>
                sköter renderingen. Både på serversidan som hos klientsidan (Universal Javascript) .
                I och med React använder vi även <a href="https://facebook.github.io/flux/">Flux</a> för applikationens dataflöde.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>Javascript / Node.js, React, Fluxible, Redux</p>
                <h3>Länkar:</h3>
                <p>
                    <a href="http://www.svtplay.se" target="_blank">www.svtplay.se</a>
                </p>
            </aside>
        </Article>
    );
};
