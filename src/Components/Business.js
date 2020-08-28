import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from '../Components/Story';

export default class Business extends Component {

    static contextType = NewsContext;

    render() {
        return (
            <>
                 <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"Business"} url={"https://upload.wikimedia.org/wikipedia/commons/f/f5/Photos_NewYork1_032.jpg"} />
                    </div>

                    <div className="newspage__stories">
                    {this.context.businessArticles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
                </div>
            </>
        )
    }
}
