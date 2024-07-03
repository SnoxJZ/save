import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/auth/token', {
                username,
                password
            }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            setToken(response.data.access_token);
        } catch (err) {
            throw new Error('Invalid username or password');
        }
    };

    const logout = () => {
        setToken('');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};