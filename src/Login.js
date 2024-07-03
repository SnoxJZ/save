import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import 'styles/login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div id="login">
            <h1>
                <strong>Welcome.</strong> Please login.
            </h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <p>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
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
    );
};

export default Login;