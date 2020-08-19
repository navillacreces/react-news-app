import React from 'react';
import '../CSS/Header.css';
import Apps from "@material-ui/icons/Apps";
import AccountCircle from "@material-ui/icons/AccountCircle";
//import Search from "@material-ui/icons/Search";

function Header() {
    return (
        <nav className="nav">
            <div className="nav__title">
                <div className="hamburger">
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
                </div>
                <h5>Material UI news with News API</h5>
            </div>

            <div className="nav__search">
                
                <input type="text" placeholder={"Search for topics,locations & sources"}>
                
                </input>
            </div>

            <div className="nav__User">
                <Apps className="apps"/>
                <AccountCircle className="account_circle" />
            </div>
                     
        </nav>
    )
}

export default Header;
