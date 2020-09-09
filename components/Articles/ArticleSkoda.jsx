import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleSkoda = () => {
    return (
        <Article header="Skoda - Familjekompositören">
            <ArticleSlider>
                <div>
                    <img src="img/case/familjekompositoren/screen1.png" alt="" />
                </div>
                <div>
                    <img src="img/case/familjekompositoren/screen2.png" alt="" />
                </div>
                <div>
                    <img src="img/case/familjekompositoren/screen3.png" alt="" />
                </div>
                <div>
                    <img src="img/case/familjekompositoren/screen4.png" alt="" />
                </div>
            </ArticleSlider>
            <p>
                En kampanj där syftet var att promota Skodas familjebilar. Analyserar din Spotify Topplista eller Spotify spellista för att matcha det med andra personer.
                En topplista presenteras med de personer som du har mest gemensamma låtar/artister med.
            </p>
            <p>
                Projektet krävde även att jag byggde en enklare webserver med ett REST-API i C.
                Detta för att kunna skapa Spotify-spellistor dynamiskt samt hämta ut en användares toplistor med hjälp Spotifys C-bibliotek Libspotify.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Lead Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>C,PHP,HTML5 / Libspotify, jQuery, Facebook Graph API</p>
                <h3>Demo:</h3><p><a href="http://sites.adqualifier.com/skoda/familjekompositoren/" target="_blank">www.familjekompositoren.se</a></p>
            </aside>
        </Article>
    );
};
