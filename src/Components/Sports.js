import React, { Component } from 'react'
import Sidebar from './Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from './Story';

export default class Sports extends Component {

    static contextType = NewsContext;
    render() {
        return (
            <>
                 <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"Sports"} url={"https://media.defense.gov/2014/Jul/16/2000832464/-1/-1/0/140715-F-MI136-027.JPG"}/>
                    </div>
                    <div className="newspage__stories">
                    {this.context.sportsArticles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
                </div>
            </>
        )
    }
}
