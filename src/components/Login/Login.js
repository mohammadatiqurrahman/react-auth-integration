import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle,signInWithGithub} = useAuth()
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            <button onClick={signInWithGithub}>Github login</button>
            <br />
            <Link to="/register">New User</Link>
        </div>
    );
};

export default Login;