import React from 'react';

import '../CSS/SidebarOption.css';


function SidebarOption({title, image}) {
    return (
        <div className="sidebar_option">
            {image}
            <p>{title}</p>
            
        </div>
    )
}

export default SidebarOption
