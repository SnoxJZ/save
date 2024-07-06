import axios from 'axios';

export const requestCode = async (phoneNumber, proxySettings) => {
    const data = {
        request: {
            phone_number: phoneNumber
        },
        proxy: proxySettings
    };
    const response = await axios.post(`/telegram/request_code`, data);
    return response.data;
};

export const addAccount = async (phoneNumber, code, phoneCodeHash, password, proxySettings) => {
    const data = {
        account: {
            phone_number: phoneNumber,
            code: code,
            phone_code_hash: phoneCodeHash,
            password: password
        },
        proxy: proxySettings
    };
    const response = await axios.post(`/telegram/add_account`, data);
    return response.data;
};

export const getAccounts = async () => {
    try {
        const response = await axios.get(`/telegram/accounts`);
        return response.data.accounts;
    } catch (error) {
        console.error("Error fetching accounts", error);
        throw error;
    }
};

export const deleteAccount = async (phoneNumber) => {
    try {
        const response = await axios.delete(`/telegram/delete_account/${phoneNumber}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting account", error);
        throw error;
    }
};
