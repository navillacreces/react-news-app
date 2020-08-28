import React from 'react';
import '../CSS/MinutesSince.css';
import {formatDistance} from 'date-fns';


function MinutesSince(props) {

    const getDifference = () =>{

        const x = props.time;
        const dateTime = x.split("T");
        const date = dateTime[0].split('-');
        const time = dateTime[1].split(':');
        const year = date[0];
        const month = date[1];
        const day = date[2];
        const hour = time[0];
        const min = time[1];
        const sec = time[2].slice(0,-1);
        const rightNow = new Date();

        const myYear = rightNow.getUTCFullYear();
        const myMonth = rightNow.getUTCMonth() + 1;
        const myDay = rightNow.getUTCDate();
        const myHour = rightNow.getUTCHours();
        const myMin = rightNow.getUTCMinutes();
        const mySec = rightNow.getUTCSeconds();

        const y =  formatDistance(new Date(year,month,day,hour,min,sec),new Date(myYear,myMonth,myDay,myHour,myMin,mySec));
        return y;
    }   

    


    return (
        
        <>  {getDifference()} ago</>
       
    )
}

export default MinutesSince
