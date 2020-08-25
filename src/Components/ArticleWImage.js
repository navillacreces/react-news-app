import React, { Component } from 'react'
import '../CSS/ArticleWImage.css';

export default class ArticleWImage extends Component {
    render() {
        return (
            <div className="articleW">
                <p>{this.props.title}</p>
                <img src={this.props.urlToImage} alt="articleImage" />
            </div>
        )
    }
}
