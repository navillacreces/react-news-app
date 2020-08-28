import React, { Component } from 'react';
import '../CSS/NewsPageTitle.css'
import Share from "@material-ui/icons/Share";
import Star from "@material-ui/icons/Star";

export default class NewsPageTitle extends Component {




    render() {
        return (
            <div className="newspagetitle">
                <div className="newspagetitle__left">
                    <img src={this.props.url} alt="newsPic" className="newspagetitle__image" /> 
                    <h1>{this.props.title}</h1>
                </div>
                <div className="newspagetitle__right">
                    <button>

                    <Star className="newspagetitle__icon" />
                    Follow
                    </button>

                    <button>
                    <Share className="newspagetitle__icon"/>
                    Share
                    </button>
                   
                    
                </div>
            </div>
        )
    }
}
