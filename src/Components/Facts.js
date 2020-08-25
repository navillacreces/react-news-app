import React from 'react'
import '../CSS/Facts.css';
import { v4 as uuidv4 } from 'uuid';
import Article from './Article';
import NewsContext from "./NewsContext"


export default class Facts extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    static contextType = NewsContext;
    render() {

        
        console.log(this.context.factArticles)


        return (
            <div className="facts">
                <p>Fact Check</p>
                <hr/>
                {this.context.factArticles.map(article =>{
                    return <Article key={uuidv4()} {...article}  />
                })}
            </div>
        )
    }
}
