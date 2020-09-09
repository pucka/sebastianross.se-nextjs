import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleOperan = () => {
    return (
        <Article header="Operan - Opera Soap">
            <ArticleSlider>
                <div>
                    <img src="img/case/operasoap/screen1.png" alt="" />
                </div>
            </ArticleSlider>
            <p>
                En minisajt för att promota Opera Soap, en tvål sponsrad av Kungliga Operan. Sidan är Responsive och fungerar på alla typer av skärmstorlekar.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>HTML, AS3 / jQuery</p>
                <h3>Webbsida:</h3><p><a href="http://operasoap.se/" target="_blank">www.operasoap.se</a></p>
            </aside>
        </Article>
    );
};
