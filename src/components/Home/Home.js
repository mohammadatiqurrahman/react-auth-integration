import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>Hey, i am {user.displayName}</h1>
            <img style={{borderRadius:'50%'}} src={user.photoURL} alt="" />
            <h3>Welcome to my home! Please seat down! :)</h3>
        </div>
    );
};

export default Home;