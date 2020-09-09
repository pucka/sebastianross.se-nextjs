import Article from '../Article.jsx';
import ArticleSlider from '../ArticleSlider';

export const ArticleACO = () => {
    return (
        <Article header="ACO - Spotless Comeback">
            <ArticleSlider>
                <div>
                    <img src="img/case/spotlesscomeback/screen1.png" alt="" />
                </div>
            </ArticleSlider>
            <p>
                ACO lanserade 2009 sin nya produktserie mot finnar. Spelet var huvuddelen i en kampanj där man besegrar mobbare med kraftfulla comebacks.
                Många priser låg i potten och kampanjen vann guld och silver i Eurobest.
            </p>
            <p>
                Jag har gjort all utveckling Forntend (AS3) samt ett enkelt CMS Backend (.NET) som hanterar de ca 100+ olika fraser och comebacks som används i spelet.
                Musiken använder sig av <a href="http://www.dinahmoe.com/" target="_blank">Dinahmoes</a> ljudmotor som jag integrerar och synkar med princip allt rörligt i spelet.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Lead Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>AS3</p>
                <h3>Webbsida:</h3><p><a href="http://www.spotlesscomeback.com/tavling/" target="_blank">www.spotlesscomeback.com/tavling</a></p>
            </aside>
        </Article>
    );
};
