import axios from 'axios';

export const getDialogs = async (phoneNumber, offset = 0, limit = 20) => {
    try {
        const response = await axios.get(`/telegram/get_dialogs/${phoneNumber}`, {
            params: { offset, limit }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching dialogs", error);
        throw error;
    }
};