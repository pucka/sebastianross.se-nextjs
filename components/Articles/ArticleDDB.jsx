import ArticleSlider from '../ArticleSlider';
import Article from '../Article.jsx';

export const ArticleDDB = () => {
    return (
        <Article header="DDB.se">
            <ArticleSlider>
                <div>
                    <img src="img/case/ddb/2.jpg" alt="" />
                </div>
                <div>
                    <img src="img/case/ddb/1.jpg" alt="" />
                </div>
            </ArticleSlider>
            <p>
                DDB gjorde om sin företagssida i början av 2012 och valde då att göra en responsiv sida med ett enkelt CMS som lätt ska kunna lokaliseras då alla DDB-kontor
                i norden skulle använda samma mall. Detta gjordes som ett tema till Wordpress då dessa är enkla att installera och uppdatera.
            </p>
            <p>
                Sidan kombinerar CSS transitions med JS för en optimal upplevelse oavsett vilken enhet du använder. Att använda sajten på en iPad ska vara minst lika enkelt som på en dator.
            </p>
            <aside className="ross_article__aside clearfix">
                <h3>Roll:</h3>
                <p>Lead Developer</p>
                <h3>Språk/Ramverk:</h3>
                <p>HTML5, JS, CSS, PHP / WordPress, jQuery</p>
                <h3>Webbsida:</h3><p><a href="http://ddb.se" target="_blank">ddb.se</a></p>
            </aside>
        </Article>
    );
};
