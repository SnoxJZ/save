// API/useStatusService.js
import axios from 'axios';
import { useAuth } from "../context/AuthContext";

export const useStatusService = () => {
    const { token } = useAuth();

    const getStatuses = async () => {
        const response = await axios.get(`/dialogs/get_statuses`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const addStatus = async (status) => {
        const response = await axios.post(`/dialogs/add_status`, status, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const deleteStatus = async (statusId) => {
        const response = await axios.delete(`/dialogs/delete_status/${statusId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const editStatus = async (statusId, updatedStatus) => {
        const response = await axios.put(`/dialogs/update_status/${statusId}`, updatedStatus, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const assignStatusToDialog = async (chatId, statusId) => {
        try {
            const response = await axios.put('/dialogs/assign_status_to_dialog', {
                chat_id: chatId,
                status_id: statusId
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error assigning status to dialog", error);
            throw error;
        }
    };

    return {
        getStatuses,
        addStatus,
        deleteStatus,
        editStatus,
        assignStatusToDialog,
    };
};
