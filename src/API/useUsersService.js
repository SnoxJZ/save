import axios from 'axios';
import { useAuth } from "../context/AuthContext";

export const useUsersService = () => {
    const { token } = useAuth();

    const getUsers = async () => {
        const response = await axios.get(`/auth/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const addUser = async (user) => {
        const response = await axios.post(`/auth/create_user`, user, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const deleteUser = async (username) => {
        const response = await axios.delete(`/auth/users/${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    return {
        getUsers,
        addUser,
        deleteUser,
    };
};
