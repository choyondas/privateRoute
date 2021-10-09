import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>hello from home</h1>
            <h2>user: {user.displayName}</h2>
        </div>
    );
};

export default Home;