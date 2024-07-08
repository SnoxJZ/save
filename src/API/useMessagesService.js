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

export const getUnreadDialogs = async (phoneNumber) => {
    try {
        const response = await axios.get(`/telegram/get_unread_dialogs/${phoneNumber}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching unread dialogs", error);
        throw error;
    }
};

export const getChatMessages = async (phoneNumber, chatId) => {
    try {
        const response = await axios.get(`/telegram/get_chat/${phoneNumber}/${chatId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching chat messages", error);
        throw error;
    }
};

export const sendChatMessage = async (phoneNumber, chatId, message) => {
    try {
        const response = await axios.post('/telegram/send_chat_message', {
            phone_number: phoneNumber,
            chat_id: chatId,
            message: message
        });
        return response.data;
    } catch (error) {
        console.error("Error sending chat message", error);
        throw error;
    }
};

export const forwardChatMessages = async (phoneNumber, fromChatId, toChatId, messageIds) => {
    const response = await axios.post(`/telegram/forward_messages`, {
        phone_number: phoneNumber,
        from_chat_id: fromChatId,
        to_chat_id: toChatId,
        message_ids: messageIds,
    });
    return response.data;
};