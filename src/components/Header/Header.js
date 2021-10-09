import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </header>
        </div>
    );
};

export default Header;