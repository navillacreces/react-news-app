import React, { Component } from 'react'
import Story from './Story';
import '../CSS/NewsPage.css';
import NewsContext from './NewsContext';
import Sidebar from './Sidebar';
import NewsPageTitle from './NewsPageTitle';

export default class NewsPage extends Component {


    static contextType = NewsContext;

    render() {
        return (
            <>
              <Sidebar />
            <div className="newspage">
                <div className="newspage__title">
                <NewsPageTitle title={"US"} url={"http://ohdct.com/hp/wp-content/uploads/2014/10/american-flag-510x600.jpg"} />
                </div>
                
                <div className="newspage__stories">
                    {this.context.articles.map(article =>{
                        return <Story key={article.publishedAt} {...article} />
                    })}
                </div>
            </div>
            </>
          
        )
    }
}
