import axios from 'axios';

export const addAccount = async (account) => {
    try {
        const response = await axios.post('/api/users', account);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAccountById = async (id) => {
    try {
        const response = await axios.get(`/api/users/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
