import React from 'react';

import './menu-item.styles.scss';
import { NavLink } from 'react-router-dom';

class MenuItem extends React.Component {

    render(){
        const { path, title,activeClassName } = this.props;

        return(
        <div className="menu-item">
            <NavLink exact to={path} activeClassName={activeClassName} >
                <span>{title}</span>
            </NavLink>
        </div>
        )
    }

};

export default MenuItem;