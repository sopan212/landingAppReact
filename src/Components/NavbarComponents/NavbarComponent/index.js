import React from 'react';
import LinkRight from '../Link-right';
import Logo from '../LogoComponent';
import MenuNav from '../MenuNav';
import './navbar.css';
const Navbar = () => {
    return (
        <div className="nav">
            <Logo />
            <MenuNav/>
            <LinkRight/>
        </div>
    
    )
}

export default Navbar;
