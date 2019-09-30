import React from 'react';

import './header.styles.scss';

import Logo from '../../components/logo/logo.component';
import Menu from '../../components/menu/menu.component';

const Header = () => (
    <div className="header">
        <Logo />
        <Menu />
    </div> 
);

export default Header;