import React, { Component } from 'react'
import ArticleWImage from './ArticleWImage';
import { v4 as uuidv4 } from 'uuid';
import "../CSS/Spotlight.css";
import NewsContext from './NewsContext';

export default class Spotlight extends Component {

    static contextType = NewsContext;

    render() {
        return (
            <div className="spotlight">
                  <p>Spotlight</p>
            <hr></hr>
            {this.context.spotlightArticles.map(article =>{
                return <ArticleWImage key={uuidv4()} {...article} />
            })}
            </div>
        )
    }
}
