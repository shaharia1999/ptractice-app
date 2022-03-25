import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo}></img>
                <div>
                    <a href="/dhop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventroty</a>
                    <a href="/about">About</a>
                </div>

            </nav>
           
            
        </div>
    );
};

export default Header;