import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>please register</h2>
            <form >

                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" />

            </form>

            <Link to="/login">Already registerd?</Link>


        </div>
    );
};

export default Register;