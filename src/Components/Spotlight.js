import React from 'react';
import ArticleWImage from './ArticleWImage';
import { v4 as uuidv4 } from 'uuid';
import "../CSS/Spotlight.css";


function Spotlight(props) {
    return (
        <div className="spotlight">
            <p>Spotlight</p>
            <hr></hr>
            {props.articles.map(article =>{
                return <ArticleWImage key={uuidv4()} {...article} />
            })}
        </div>
    )
}

export default Spotlight
