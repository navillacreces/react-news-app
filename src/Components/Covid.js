import React from 'react'
import '../CSS/Covid.css'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

function Covid() {
    return (
        <div className="Covid">
            <div className="Covid_text">
                <h4>
                    COVID-19 news:
                </h4>
                <p>
                    See the latest coverage
                </p>
            </div>
            
            <ArrowForwardIos fontSize="small"/>
        </div>
    )
}

export default Covid
