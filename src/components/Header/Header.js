import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <ul className='navbar-nav'>
                <li>
                    <Link to="/orders">Order</Link>
                </li>
                <li>
                    <Link to="/order-review">Order Review</Link>
                </li>
                <li>
                    <Link to="/inventory">Manage Inventory</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;