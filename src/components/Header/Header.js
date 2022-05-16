import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className='navbar-nav'>
                <li>
                    <a href="#">Order</a>
                </li>
                <li>
                    <a href="#">Order Review</a>
                </li>
                <li>
                    <a href="#">Manage Inventory</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;