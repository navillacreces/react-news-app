import React from 'react';
import Covid from '../Components/Covid';
import Story from './Story';
import '../CSS/TopStories.css';
import { v4 as uuidv4 } from 'uuid';
import NewsContext from '../Components/NewsContext';
import {Link } from 'react-router-dom';


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
            <Link to='/corona' style={{ color: 'black',textDecoration: 'none' }} >
            <Covid />
            </Link>
            
            <Link to='/us' style={{padding:'3px 10px 3px 45px', color: 'black',textDecoration: 'none' }}>
            <h3>
                US
            </h3>
            </Link>
            
                {this.context.top3Articles.map(article=>{
                    return <Story key={uuidv4()}  {...article}/>
                })}
            <Link to='/business' style={{padding:'3px 10px 3px 45px', color: 'black',textDecoration: 'none' }}>
            <h3>
                Business
            </h3>
            </Link>
           
             
            {this.context.business3Articles.map(article =>{
                    return <Story key={uuidv4()} {...article} />
                })}
            <Link to='/technology' style={{ padding:'3px 10px 3px 45px',color: 'black',textDecoration: 'none' }}>
            <h3>
                Technology
            </h3>
            </Link>
           
            {this.context.technology3Articles.map(article =>{
                    return <Story key={uuidv4()} {...article} />
                })}
                <Link to ='/entertainment' style={{ padding:'3px 10px 3px 45px',color: 'black',textDecoration: 'none' }} >
                        <h3>
                        Entertainment
                    </h3>
                </Link>
           
            {this.context.entertainment3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
                <Link to='/science' style={{ padding:'3px 10px 3px 45px',color: 'black',textDecoration: 'none' }}>
                        <h3>
                        Science
                    </h3>
                </Link>
           
            
            {this.context.science3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
                <Link to='/health' style={{ padding:'3px 10px 3px 45px', color: 'black',textDecoration: 'none' }}>
                        <h3>
                        Health
                    </h3>
                </Link>
           
            {this.context.health3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
            
            <Link to='/sports' style={{padding:'3px 10px 3px 45px', color: 'black',textDecoration: 'none' }} >
            <h3>
                Sports
            </h3>
            </Link>
            {this.context.sports3Articles.map(article =>{
                    return <Story key={uuidv4()}  {...article} />
                })}
        
            
            
        </div>
    )
    }
}

export default TopStories
