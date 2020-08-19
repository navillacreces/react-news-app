import React from 'react'
import '../CSS/SideHeadlines.css';
import ArticleWImage from './ArticleWImage';
import { v4 as uuidv4 } from 'uuid';

function SideHeadlines(props) {
    return (
        <div className="sideHeadlines">
            <p>Beyond the Headlines</p>
            <hr />
            {props.articles.map(article =>{
                return <ArticleWImage key={uuidv4()} {...article} />
            })}
        </div>
    )
}

export default SideHeadlines


