import React from "react";


const ArticleListItem = props => {
    return (

            <section>
                <h1>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <p>
                    <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
                    <button onClick={() => alert(props.article.slug)}>
                        Show article slug
                    </button>
                </p>
             </section>
    )
}
export default ArticleListItem;