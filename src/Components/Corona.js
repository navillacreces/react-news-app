import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from '../Components/Story';

export default class Corona extends Component {

    static contextType = NewsContext;
    render() {
        return (
            <>
                 <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"CoronaVirus"} url={"https://cdn.cnn.com/cnnnext/dam/assets/200320110619-coronavirus-animation-medium-plus-169.jpg"} />
                    </div>

                    <div className="newspage__stories">
                    {this.context.healthArticles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
                </div>
            </>
        )
    }
}
