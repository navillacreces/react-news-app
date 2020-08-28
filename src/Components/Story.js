import React from 'react';
import '../CSS/Story.css';


class Story extends React.Component {


    constructor(props){
        super(props);
        this.state={};
    }

    render(){

        
        
      
        
    return (
        <div className="story"> 
            <div className="story__description">
                <h4>{ (this.props.description === null) ? (this.props.title ): (this.props.description)}</h4>
                
                <ul>
                    <li><p className="story__source">{this.props.source?.name}</p></li>
                    <li>
                        <p>
                        {this.props.title}
                        </p>
                    </li>
                </ul>
                
            </div>
            <div className="story__image__div">
            <img src={this.props.urlToImage} alt="storyMeme" className="test_image" />          
            </div> 
        </div>
        
    )
    }
}

export default Story

