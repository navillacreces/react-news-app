import React from 'react';
import '../CSS/Article.css';

function Article(props) {
  
    

    return (
        <div className="article">
            <p>{props.title}</p>
        </div>
    )
}

export default Article
