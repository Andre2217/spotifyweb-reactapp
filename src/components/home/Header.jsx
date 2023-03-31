import React from 'react';
import logo from '../../imgs/logo1.png';

function Header() {
return (
    <header>
        <img src={logo} className="logo-header" alt="toca-play-logo" height="150" />
    </header>
    );
};
export default Header;