import React from 'react';
import LinkRight from '../link-right';
import Logo from '../LogoComponent';
import './navbar.css';
const Navbar = () => {
    return (
        <div className="nav">
            <Logo />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            <LinkRight />
        </div>
    )
}

export default Navbar;
