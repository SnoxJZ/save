import React, {useEffect, useState} from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { Textarea } from "../ui/textarea"
import ButtonRemove from "../ui/Button/ButtonRemove";
import ButtonEdit from "../ui/Button/ButtonEdit";
import {useFetching} from "../../hooks/useFetching";
import {useService} from "../../API/useService";
import Loader from "../ui/Loader";

const ModalSettingsTemplates = () => {

    const { getTemplates } = useService();
    const [templates, setTemplates] = useState([]);
    const [fetchTemplates, isLoading, error] = useFetching(async () => {
        const data = await getTemplates();
        setTemplates(data);
        console.log(setTemplates(data))
    });

    useEffect(() => {
        fetchTemplates();
    }, []);

    return (
        <div className="modal__content">
                {isLoading
                    ? <Loader/>
                    : <div className="templates__list">
                        {templates.map(item => (
                                <div className="template__item list__item" key={item.id}>
                                    <div className="template__info">
                                        <h1 className="template__title">{item.name}</h1>
                                        <p className="template__body">{item.template}</p>
                                    </div>
                                    <div className="template__edit">
                                        <ButtonRemove/>
                                        <ButtonEdit/>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                }
            <form action="" className="templates__add">
                <Input
                    type="text"
                    placeholder='Введите название шаблона'
                />
                <Textarea id="template__body-input" placeholder='Введите текст шаблона'/>
                <Button preventDefault>Добавить шаблон</Button>
            </form>

        </div>
    );
};

export default ModalSettingsTemplates;