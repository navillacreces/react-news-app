import React, { Component } from 'react';
import '../CSS/Sidebar.css';
import SidebarOption from './SidebarOption';

import Language from "@material-ui/icons/Language";
import Flag from "@material-ui/icons/Flag";
import Business from "@material-ui/icons/Business";
import LaptopMac from "@material-ui/icons/LaptopMac";
import Theaters from "@material-ui/icons/Theaters";
import Power from "@material-ui/icons/Power";
import LocalHospital from "@material-ui/icons/LocalHospital";
import SportsFootball from "@material-ui/icons/SportsFootball";
import PersonOutline from "@material-ui/icons/PersonOutline";
import StarBorder from "@material-ui/icons/StarBorder";
import Search from "@material-ui/icons/Search";
import Warning from "@material-ui/icons/Warning";
import LocationOn from "@material-ui/icons/LocationOn";
import Launch from '@material-ui/icons/Launch';


export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                
              <SidebarOption title={"Top Stories"} image={<Language />}/>
              <SidebarOption title={"For You"} image={<PersonOutline/>}/>
              <SidebarOption title={"Following"} image={<StarBorder />}/>
              <SidebarOption title={"Saved Searches"} image={<Search />}/>
              <hr />
              <SidebarOption title={"Covid-19"} image={<Warning/>}/>
              <hr/>
              <SidebarOption title={"US"} image={ <Flag/>} />
              <SidebarOption title={"Your Local News"} image={<LocationOn />}/>
              <SidebarOption title={"Business"} image={ <Business />} />
              <SidebarOption title={"Technology"} image={<LaptopMac />}/>
              <SidebarOption title={"Entertainment"} image={<Theaters/>}/>
              <SidebarOption title={"Science"} image={<Power />}/>
              <SidebarOption title={"Heatlh"} image={<LocalHospital />}/>
              <SidebarOption title={"Sports"} image={<SportsFootball />}/>
              <hr/>
              <div className="sidebar__options">
              <p>Language & region</p>
              <p>Settings</p>
              <p>Get the Android app<Launch fontSize="small"/></p>
              <p>Get the iOS app<Launch fontSize="small"/></p>
              <p>Send feedback</p>
              <p>Help<Launch fontSize="small" /></p>
              </div>
              
            </div>
        )
    }
}
  