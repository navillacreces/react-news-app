import React, { Component } from 'react'
import '../CSS/ArticleWImage.css';

export default class ArticleWImage extends Component {
    render() {
        return (
            <div className="articleW">
                <p>{this.props.title}</p>
                
                {(this.props.urlToImage === null || this.props.urlToImage === '') ? (<img src={this.props.urlToImage} alt="articleImage" style={{display: 'none'}} />): (<img src={this.props.urlToImage} alt="articleImage" />)}
            </div>
        )
    }
}
