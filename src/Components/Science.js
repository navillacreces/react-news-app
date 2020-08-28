import React, { Component } from 'react'
import Sidebar from './Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from './Story';

export default class Science extends Component {

    static contextType = NewsContext;
    render() {
        return (
            <>
                 <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"Science"} url={"https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148494536.jpg?size=626&ext=jpg"}/>
                    </div>
                    <div className="newspage__stories">
                    {this.context.scienceArticles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
                </div>
            </>
        )
    }
}
