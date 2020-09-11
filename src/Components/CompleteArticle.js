import React, { Component } from 'react'
import NewsContext from './NewsContext';
import Sidebar from './Sidebar';

export default class CompleteArticle extends Component {
    
    
    static contextType = NewsContext;

    render() {

        
        
        

        return (
            <>
                <Sidebar />
                <div className="complete_article">
                    <h3 style={{width: '300px'}}>{this.context.articles[0]?.title}</h3>
                    <h6 style={{width: '300px'}}>{this.context.articles[0]?.description}</h6>
                    <p>{this.context.articles[0]?.author}</p>
                    <p>{this.context.articles[0]?.source.name}</p>
                    <hr/>
                    <p>{this.context.articles[0]?.content}</p>
                    <a href={this.context.articles[0]?.url} target={"__blank"}>read the complete article here</a>
                </div>
            </>
        )
    }
}
