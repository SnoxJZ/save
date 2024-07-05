import axios from 'axios';
import {useAuth} from "../context/AuthContext";

export const useTemplateService = () => {
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

    const addTemplate = async (template) => {
        const response = await axios.post(`/templates/add_template`, template, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const deleteTemplate = async (templateId) => {
        const response = await axios.delete(`/templates/delete_template/${templateId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    const editTemplate = async (templateId, updatedTemplate) => {
        const response = await axios.put(`/templates/edit_template/${templateId}`, updatedTemplate, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    };

    return {
        getTemplates,
        addAccount,
        getAccountById,
        addTemplate,
        deleteTemplate,
        editTemplate,
    };
};