import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleVolkswagen = () => {
    return (
        <Article header="Volkswagen - Bit för bit">
            <ArticleSlider>
                <div>
                    <img src="img/case/bitforbit/screen1.png" alt="" />
                </div>
                <div>
                    <img src="img/case/bitforbit/screen2.png" alt="" />
                </div>
                <div>
                    <img src="img/case/bitforbit/screen3.png" alt="" />
                </div>
            </ArticleSlider>
            <p>
                Nya Volkswagen Beetle lanserades med en två veckors kampanj där en lycklig vinnare vann en Beetle. Med hjälp av ledtrådar utspridda på diverse bloggar,
                minisajter samt facebook skulle man samla delar för att bygga ihop en digital Beetle.
            </p>
            <p>
                Sajten byggdes i en desktop och en mobil variant med kravet att de inte skulle skilja i funktionalitet.
                Mycket tid lades ner på att hålla hög säkerhet. Sajterna höll hög teknisk kvalitet och utnyttjade bl.a History API, CSS Transitions samt helt AJAX baserade sidvisningar.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Lead Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>PHP, HTML5 / jQuery, History.js, Facebook Graph API, Hybridauth</p>
                <h3>Webbsida:</h3><p>Finns ej (Kampanjen varade endast i två veckor och plockades sedan ner)</p>
            </aside>
        </Article>
    );
};
