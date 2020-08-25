import React, { Component } from 'react'
import '../CSS/Article.css';
import NewsContext from './NewsContext'

export default class Article extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

    static contextType = NewsContext

    
    render() {
        return (
            <div class="article">
                <p>{this.props.title}</p>
                
            </div>
        )
    }
}
