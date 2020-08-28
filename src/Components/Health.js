import React, { Component } from 'react'
import Sidebar from './Sidebar';
import NewsContext from '../Components/NewsContext';
import NewsPageTitle from '../Components/NewsPageTitle';
import Story from './Story';

export default class Health extends Component {

    static contextType = NewsContext;
    render() {
        return (
            <>
                 <Sidebar />
                <div className="newspage">
                    <div className="newspage__title">
                        <NewsPageTitle title={"Health"} url={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/ISO_7010_E003_-_First_aid_sign.svg/1200px-ISO_7010_E003_-_First_aid_sign.svg.png"} />
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
