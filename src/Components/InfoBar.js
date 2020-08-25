import React from 'react'
import '../CSS/InfoBar.css';
import WeatherBox from './WeatherBox'
import Facts from './Facts'
import SideHeadlines from './SideHeadlines';


import Spotlight from './Spotlight';
import InTheNews from './InTheNews';

class InfoBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
    return (
        <div className="infoBar">
           <WeatherBox />
           <Facts />
           <SideHeadlines  />
           <Spotlight />
            <InTheNews />  
        </div>
    )
    }
}

export default InfoBar;
