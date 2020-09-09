import classNames from 'classnames';

const Article = ({ header, className, children }) => {
    return (
        <article className={classNames('ross_article', className)}>
            <header className="ross_article__header">
                <h2>
                    { header }
                </h2>
            </header>
            { children }
        </article>
    );
};

export default Article;
