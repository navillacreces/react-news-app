import React from 'react';
import Covid from '../Components/Covid';
import Story from './Story';
import '../CSS/TopStories.css';
import { v4 as uuidv4 } from 'uuid';
import NewsContext from '../Components/NewsContext';


class TopStories extends React.Component {


    constructor(props){
        super(props);
        this.state = {
           
        };
    }

    static contextType = NewsContext;
    

    render(){
      
    return (

        
        <div className="topStories">
            <h3>
                Headlines
            </h3>
            <Covid />
            
                <h3>
                US
            </h3>
                {this.context.top3Articles.map(article=>{
                    return <Story key={uuidv4()}  {...article}/>
                })}
            <h3>
                Business
            </h3>
             
            {this.context.business3Articles.map(article =>{
                    return <Story key={uuidv4()} {...article} />
                })}
            <h3>
                Technology
            </h3>
            {this.context.technology3Articles.map(article =>{
                    return <Story key={uuidv4()} {...article} />
                })}
            <h3>
                Entertainment
            </h3>
            {this.context.entertainment3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            <h3>
                Science
            </h3>
            
            {this.context.science3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            <h3>
                Health
            </h3>
            {this.context.health3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            <h3>
                Sports
            </h3>
            {this.context.sports3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
        
            
            
        </div>
    )
    }
}

export default TopStories
