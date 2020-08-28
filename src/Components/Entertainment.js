import React, { Component } from 'react'
import Sidebar from './Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from './Story';

export default class Entertainment extends Component {

    static contextType = NewsContext;
    render() {
        return (
            <>
                <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"Entertainment"} url={"https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/Hollywood%20Sign%20hillside%20closeup.jpg?itok=0csiv3Tc"} />
                    </div>

                    <div className="newspage__stories">
                    {this.context.entertainmentArticles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
                </div>
            </>
        )
    }
}
