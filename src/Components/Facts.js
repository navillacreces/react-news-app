import React from 'react'
import '../CSS/Facts.css';
import { v4 as uuidv4 } from 'uuid';
import Article from './Article';


export default class Facts extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    render() {

        const x = this.props.articles;
        


        return (
            <div className="facts">
                <p>Fact Check</p>
                <hr/>
                {x.map(article =>{
                    return <Article key={uuidv4()} {...article}  />
                })}
            </div>
        )
    }
}
