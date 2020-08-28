import React, { Component } from 'react';
import Sidebar from './Sidebar';
import TopStories from './TopStories';
import InfoBar from './InfoBar';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <TopStories />
                <InfoBar />
            </>
        )
    }
}
