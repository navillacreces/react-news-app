import React, { Component } from 'react'
import '../CSS/SideHeadlines.css';
import ArticleWImage from './ArticleWImage';
import { v4 as uuidv4 } from 'uuid';
import NewsContext from './NewsContext';


export default class SideHeadlines extends Component {


    static contextType = NewsContext;

    render() {
        return (
            <div className="sideHeadlines">
             <p>Beyond the Headlines</p>
                <hr />
            {this.context.beyondArticles.map(article =>{
                return <ArticleWImage key={uuidv4()} {...article} />
            })}
            </div>
        )
    }
}



