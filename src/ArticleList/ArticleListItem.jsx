import React from "react";
import SlugButton from "./SlugButton"
import styles from "./ArticleListItem.module.css";

const ArticleListItem = props => {
    return (
            <section>
                <h1 className={styles.title}>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <p>
                    <time className={styles.time} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
                    <SlugButton buttonText={props.article.author} slug={props.article.slug}></SlugButton>
                </p>
             </section>
    )
}
export default ArticleListItem;