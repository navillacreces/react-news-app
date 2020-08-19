import React, { Component } from 'react'
import '../CSS/WeatherBox.css';
import WbSunny from "@material-ui/icons/WbSunny";
import Cloud from '@material-ui/icons/Cloud';
import MyLocation from "@material-ui/icons/MyLocation";


export default class WeatherBox extends Component {
    render() {
        return (
            <div className="weatherbox">

                <div className="wb_location">
                    <p>Dallas</p>
                    
                    <MyLocation />
                </div>

              
                <hr/>   
                <div className="weather-flex">
                    <div className="now">
                        <div className="now__details">
                        <h3>Sunny</h3>
                        <h3>75</h3>
                   </div>
                   <WbSunny className="now__icon" fontSize="large"/>
                    </div>
                    <div className="this_week">
                        <ul className="icon_list">
                            <li>
                                <p>Today</p>
                                <Cloud className="icon" fontSize="large"/>
                                <p>43/35</p>
                            </li>
                            <li>
                                <p>Mon</p>
                                <WbSunny className="icon" fontSize="large" />
                                <p>43/35</p>
                            </li>
                            <li>
                                <p>Tues</p>
                                <Cloud className="icon" fontSize="large" />
                                <p>43/35</p>
                            </li>
                            <li>
                                <p>Wed</p>
                                <WbSunny className="icon" fontSize="large" />
                                <p>43/35</p>
                            </li>
                            <li>
                                <p>Thurs</p>
                                <Cloud className="icon" fontSize="large" />
                                <p>43/35</p>
                            </li>
                        </ul>           
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
