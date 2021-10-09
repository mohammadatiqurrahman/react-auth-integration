import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <button>Google Sign in</button>
            <br />
            <Link to="/register">New User</Link>
        </div>
    );
};

export default Login;