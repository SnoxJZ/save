import axios from 'axios';
import {useAuth} from "../context/AuthContext";

export const useTemplateService = () => {
    const { token } = useAuth();

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
        addTemplate,
        deleteTemplate,
        editTemplate,
    };
};