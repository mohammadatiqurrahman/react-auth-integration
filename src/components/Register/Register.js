import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Please Regiser</h3>
            <form>
                <input type="text" />
                <br />
                <input type="text" />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;