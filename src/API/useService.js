import axios from 'axios';
import {useAuth} from "../context/AuthContext";

export const useService = () => {
    const { token } = useAuth();

    const addAccount = async (account) => {
        const response = await axios.post('/api/users', account);
        return response.data;
    };

    const getAccountById = async (id) => {
        const response = await axios.get(`/api/users/${id}`);
        return response.data;
    };

    const getTemplates = async () => {
        const response = await axios.get(`/templates/get_templates`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    // Другие функции API можно добавить здесь аналогично

    return {
        getTemplates,
        addAccount,
        getAccountById,
    };
};