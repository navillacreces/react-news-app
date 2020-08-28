import React, { Component } from 'react'
import Sidebar from './Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from './Story';

export default class Technology extends Component {

    static contextType = NewsContext;

    render() {
        return (
            <>
                <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"Technology"} url={"https://www2.deloitte.com/content/dam/Deloitte/au/Images/promo_images/au-tmt-predictions-2020-1x1.jpg"} />
                    </div>

                    <div className="newspage__stories">
                    {this.context.technologyArticles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
                </div>
            </>
        )
    }
}
