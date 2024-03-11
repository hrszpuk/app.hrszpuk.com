import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <img src='/images/logo.png' alt='logo' className='header-icon'/>
            <h1>Joe's Cheese Shop</h1>
        </header>
    )
}

export default Header;