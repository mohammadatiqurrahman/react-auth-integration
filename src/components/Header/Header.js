import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth()
    return (
        <div>
            <header className="style-header">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                {!user.email && <NavLink to="/register">Register</NavLink>}
                {!user.email && <NavLink to="/login">Login</NavLink>}
                <small style={{paddingRight:'8px'}}>{user.displayName}</small>
                {user.email && <button onClick={logOut}>log out</button>}
                <img style={{width:'25px', borderRadius:'50%'}} src={user.photoURL} alt="" />

            </header>
        </div>
    );
};

export default Header;