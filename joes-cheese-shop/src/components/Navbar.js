import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {FiMenu} from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className='navbar'>
            <div className='menu-icon' onClick={() => {setIsOpen(!isOpen);console.log(isOpen);}}>
                <FiMenu/>
            </div>
            {isOpen && (
                <>
                    <div className='nav-items-left'>
                        <NavLink
                            to='/products'
                            className={({isActive}) => isActive ? 'active' : undefined}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to='/services'
                            className={({isActive}) => isActive ? 'active' : undefined}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to='/contact'
                            className={({isActive}) => isActive ? 'active' : undefined}
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to='/about'
                            className={({isActive}) => isActive ? 'active' : undefined}
                        >
                            About
                        </NavLink>
                    </div>
                    <div className='nav-items-right'>
                        <NavLink
                            to='/basket'
                            className={({isActive}) => isActive ? 'active' : undefined}
                        >
                            Basket
                        </NavLink>
                    </div>
                </>
            )}
        </nav>
    )
}

export default Navbar;