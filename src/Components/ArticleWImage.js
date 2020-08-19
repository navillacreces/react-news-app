import React from 'react';
import '../CSS/ArticleWImage.css';


function ArticleWImage(props) {
    return (
        <div className="articleW">
            <p>{props.title}</p>
            <img src={props.urlToImage} alt="articleImage" />
        </div>
    )
}

export default ArticleWImage
