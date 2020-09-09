import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleForsvarsmakten = () => {
    return (
        <Article header="Försvarsmakten - Test: Vår verklighet">
            <ArticleSlider>
                <div>
                    <img src="img/case/testvarverklighet/screen1.png" alt="" />
                </div>
                <div>
                    <img src="img/case/testvarverklighet/screen2.png" alt="" />
                </div>
                <div>
                    <img src="img/case/testvarverklighet/screen3.png" alt="" />
                </div>
                <div>
                    <img src="img/case/testvarverklighet/screen4.png" alt="" />
                </div>
                <div>
                    <img src="img/case/testvarverklighet/screen5.png" alt="" />
                </div>
                <div>
                    <img src="img/case/testvarverklighet/screen6.png" alt="" />
                </div>
                <div>
                    <img src="img/case/testvarverklighet/screen7.png" alt="" />
                </div>
            </ArticleSlider>
            <p>
                En Facebook App där man bildar bildar ett lag med 7 av sina vänner. Man ska sedan lösa pussel samt svara på frågor om sina kompisar som rör deras aktivitet på Facebook. Lagen tävlar sedan om att va den bästa gruppen på topplistan som baseras på lagets totala poäng samt tid.
            </p>
            <p>
                Detta är en flashapplikation som drar nytta av många metoder i Facebook Graph API. Utmaningen låg dels i att göra de små spelen enkla men utmanande samt att filtrera ut väsentlig FB -data från de tävlande laget. Jag har varit med och utvecklat flash-delen samt byggt hela Facebook-integrationen.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Lead Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>AS3,PHP / Facebook Graph API</p>
                <h3>Webbsida:</h3><p><a href="http://apps.facebook.com/test-var-verklighet/" target="_blank">apps.facebook.com/test-var-verklighet/</a></p>
            </aside>
        </Article>
    );
};
