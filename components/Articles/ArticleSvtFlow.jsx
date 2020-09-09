import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleSvtFlow = () => {
    return (
        <Article header="SVT Flow">
            <ArticleSlider>
                <div>
                    <img src="img/case/svtflow/screen1.jpg" alt="" />
                </div>
                <div>
                    <img src="img/case/svtflow/screen2.jpg" alt="" />
                </div>
            </ArticleSlider>
            <p>
                SVT lanserar ett nytt sätt att se på TV online.
                Kombinera TVns sträcktittning med online-tjänsters valfrihet i en snygg paketering så har du SVT Flow.
                All videos visas i en overlay som täcker hela webbläsaren för att ge en mer tv-känsla.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>Java, Javascript / Play Framework, Require.js, Jasmine, jQuery, History.js</p>
                <h3>Länkar:</h3>
                <p>
                    <a href="http://www.svtflow.se" target="_blank">www.svtflow.se</a> (site cancelled 2015)
                </p>
            </aside>
        </Article>
    );
};
