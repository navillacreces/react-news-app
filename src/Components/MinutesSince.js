import React from 'react';
import '../CSS/MinutesSince.css';
import {differenceInMinutes} from 'date-fns';


function MinutesSince(props) {

    const getDifference = () =>{

        const x = props.publishedAt;

        const dateTime = x.split("T");
        const date = dateTime[0].split("-");

        const time = dateTime[1].split(":");

        const rightNow = new Date();

        const now = new Date(rightNow.getUTCFullYear(),rightNow.getUTCMonth(),rightNow.getUTCDay(),rightNow.getUTCHours(),rightNow.getUTCMinutes());
        const published = new  Date(date[0],date[1],date[2],time[0],time[1]);

        const y =  differenceInMinutes(now,published);
        return y;
    }

    


    return (
        <div className="minutesSince">
            <p>{getDifference()}</p>
        </div>
    )
}

export default MinutesSince
