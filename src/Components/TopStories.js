import React from 'react';
import Covid from '../Components/Covid';
import Story from './Story';
import '../CSS/TopStories.css';
import { v4 as uuidv4 } from 'uuid';


class TopStories extends React.Component {


    constructor(props){
        super(props);
        this.state = {
           
        };
    }



    render(){
      
        const top3StoriesArray = [this.props.articles[0],this.props.articles[1],this.props.articles[2]];
        const top3StoriesBusinessArray = [this.props.businessArticles[0],this.props.businessArticles[1],this.props.businessArticles[2]];
        const top3StoriesTechnologyArray = [this.props.technologyArticles[0],this.props.technologyArticles[1],this.props.technologyArticles[2]];
        const top3StoriesEntertainmentArray = [this.props.entertainmentArticles[0],this.props.entertainmentArticles[1],this.props.entertainmentArticles[2]];
        const top3StoriesScienceArray = [this.props.scienceArticles[0],this.props.scienceArticles[1],this.props.scienceArticles[2]];
        const top3StoriesHealthArray = [this.props.healthArticles[0],this.props.healthArticles[1],this.props.healthArticles[2]];
        const top3StoriesSportsArray = [this.props.sportsArticles[0],this.props.sportsArticles[1],this.props.sportsArticles[2]];


    return (

        
        <div className="topStories">
            <h3>
                Headlines
            </h3>
            <Covid />
            <h3>
                US
            </h3>
                {top3StoriesArray.map(article=>{
                    return <Story key={uuidv4()}  {...article}/>
                })}
            <h3>
                Business
            </h3>
                {top3StoriesBusinessArray.map(article =>{
                    return <Story key={uuidv4()} {...article} />
                })}
            <h3>
                Technology
            </h3>
            {top3StoriesTechnologyArray.map(article =>{
                    return <Story key={uuidv4()} {...article} />
                })}
            <h3>
                Entertainment
            </h3>
            {top3StoriesEntertainmentArray.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            <h3>
                Science
            </h3>
            
            {top3StoriesScienceArray.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            <h3>
                Health
            </h3>
            {top3StoriesHealthArray.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            <h3>
                Sports
            </h3>
            {top3StoriesSportsArray.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            
        </div>
    )
    }
}

export default TopStories
