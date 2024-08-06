import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/login.css'
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate('/app');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login__wrapper">
            <div id="login">
                <h1 className="login__header">
                    <strong>Welcome.</strong> Please login.
                </h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <p>
                            <input
                                type="text"
                                placeholder="Username"
                                className="login"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                className="login"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </p>
                        <p>
                            <input type="submit" defaultValue="Login"/>
                        </p>
                    </fieldset>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>

    );
};

export default Login;