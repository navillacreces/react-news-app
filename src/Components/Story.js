import React from 'react';
import '../CSS/Story.css';
import MinutesSince from './MinutesSince';

class Story extends React.Component {


    constructor(props){
        super(props);
        this.state={};
    }

    render(){

        
        
      
        
    return (
        <div className="story"> 
            <div className="story__description">
                <h4>{ (this.props.description === null || this.props.description === '') ? (this.props.title ): (this.props.description)}</h4>
                
                <ul>
                    
                    <li>
                        <p>
                        {this.props.title}
                        </p>
                    </li>
                    <li><p className="story__source">{this.props.source?.name}<MinutesSince time={this.props.publishedAt} ></MinutesSince></p></li>
                </ul>
                
            </div>
            <div className="story__image__div">
                {(this.props.urlToImage === null || this.props.urlToImage === '') ? (<img src={this.props.urlToImage} alt="storyMeme" className="test_image" style={{display: 'none'}} />   ): (<img src={this.props.urlToImage} alt="storyMeme" className="test_image" />   )}
                   
            </div> 
        </div>
        
    )
    }
}

export default Story

