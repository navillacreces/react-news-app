import React, { Component } from 'react';
import '../CSS/Sidebar.css';
import SidebarOption from './SidebarOption';
import {Link} from 'react-router-dom';
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
                <Link to ='/' style={{ color: 'black',textDecoration: 'none' }}>
                    <SidebarOption title={"Top Stories"} image={<Language />}/>
                </Link>
              
              <SidebarOption title={"For You"} image={<PersonOutline/>}/>
              <SidebarOption title={"Following"} image={<StarBorder />}/>
              <SidebarOption title={"Saved Searches"} image={<Search />}/>
              <hr />
              <Link to='/corona' style={{ color: 'black',textDecoration: 'none' }}>
              <SidebarOption title={"Covid-19"} image={<Warning/>}/>
              </Link>
             
              <hr/>
                <Link to='/us' style={{ color: 'black',textDecoration: 'none' }}>
                    <SidebarOption title={"US"} image={ <Flag/>} />
                </Link>
              
              <SidebarOption title={"Your Local News"} image={<LocationOn />}/>
              
                
              <Link to="/business" style={{ color: 'black',textDecoration: 'none' }}>
              <SidebarOption title={"Business"} image={ <Business />} />
              </Link>
              <Link to='/technology' style={{ color: 'black',textDecoration: 'none' }}>
                 <SidebarOption title={"Technology"} image={<LaptopMac />}/>
              </Link>
              <Link to='/entertainment' style={{ color: 'black',textDecoration: 'none' }}>
                  <SidebarOption title={"Entertainment"} image={<Theaters/>}/>
              </Link>
              <Link to='/science' style={{ color: 'black',textDecoration: 'none' }}>
                <SidebarOption title={"Science"} image={<Power />}/>
              </Link>
              <Link to='/health' style={{ color: 'black',textDecoration: 'none' }}>
              <SidebarOption title={"Heatlh"} image={<LocalHospital />}/>
              </Link>
              <Link to='/sports' style={{ color: 'black',textDecoration: 'none' }}>
              <SidebarOption title={"Sports"} image={<SportsFootball />}/>
              </Link>
              
              
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
  