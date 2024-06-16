import axios from 'axios';

export const createUser = async (user) => {
    try {
        const response = await axios.post('/api/users', user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`/api/users/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};