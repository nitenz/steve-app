import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './menu.styles.scss';

const Menu = () => {

   return ( 
        <div className="menu-container">   
            <MenuItem className="menu-item" title="Homepage" exact path="/" />  
            <MenuItem className="menu-item" title="News" path="/news" />
            <MenuItem className="menu-item" title="About" path="/about" />
            <MenuItem className="menu-item" title="Photos" path="/photos" />
            <MenuItem className="menu-item" title="Videos" path="/videos" /> 
        </div>
    )};

export default Menu;