import React, {useEffect, useState} from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { Textarea } from "../ui/textarea"
import ButtonRemove from "../ui/Button/ButtonRemove";
import ButtonEdit from "../ui/Button/ButtonEdit";
import {useFetching} from "../../hooks/useFetching";
import {useTemplateService} from "../../API/useTemplateService";
import Loader from "../ui/Loader";

const ModalSettingsTemplates = () => {

    const { getTemplates, addTemplate, deleteTemplate, editTemplate } = useTemplateService();
    const [templates, setTemplates] = useState([]);
    const [currentTemplateId, setCurrentTemplateId] = useState(null);
    const [newTemplate, setNewTemplate] = useState({name: '', template: ''})
    const [fetchTemplates, isLoading, error] = useFetching(async () => {
        const data = await getTemplates();
        setTemplates(data);
    });

    useEffect(() => {
        fetchTemplates();
    }, []);

    const handleAddOrEditTemplate = async (e) => {
        e.preventDefault();
        try {
            if (currentTemplateId) {
                const updatedTemplate = await editTemplate(currentTemplateId, newTemplate);
                setTemplates(templates.map(template => template.id === currentTemplateId ? updatedTemplate : template));
            } else {
                const addedTemplate = await addTemplate(newTemplate);
                setTemplates([...templates, addedTemplate]);
            }
            setNewTemplate({ name: '', template: '' });
            setCurrentTemplateId(null);
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditTemplate = (template) => {
        setCurrentTemplateId(template.id);
        setNewTemplate({ name: template.name, template: template.template });
    };

    const handleDeleteTemplate = async (templateId) => {
        try {
            await deleteTemplate(templateId);
            setTemplates(templates.filter(template => template.id !== templateId));
        } catch (err) {
            console.error(err);
        }
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="modal__content">
                {isLoading
                    ? <div style={{display: "flex", justifyContent: "center"}}><Loader /></div>
                    : <div className="templates__list">
                        {templates.map(item => (
                                <div className="template__item list__item" key={item.id}>
                                    <div className="template__info">
                                        <h1 className="template__title">{item.name}</h1>
                                        <p className="template__body">{item.template}</p>
                                    </div>
                                    <div className="template__edit">
                                        <ButtonRemove onClick={() => handleDeleteTemplate(item.id)} />
                                        <ButtonEdit onClick={() => handleEditTemplate(item)} />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                }
            <form className="templates__add" onSubmit={handleAddOrEditTemplate}>
                <Input
                    type="text"
                    placeholder='Введите название шаблона'
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                />
                <Textarea
                    id="template__body-input"
                    placeholder='Введите текст шаблона'
                    value={newTemplate.template}
                    onChange={(e) => setNewTemplate({ ...newTemplate, template: e.target.value })}
                />
                <Button>{currentTemplateId ? 'Изменить шаблон' : 'Добавить шаблон'}</Button>
            </form>

        </div>
    );
};

export default ModalSettingsTemplates;