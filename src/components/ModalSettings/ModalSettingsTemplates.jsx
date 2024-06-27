import React from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { Textarea } from "../ui/textarea"
import ButtonRemove from "../ui/Button/ButtonRemove";
import ButtonEdit from "../ui/Button/ButtonEdit";



const ModalSettingsTemplates = ({templatesGroup, templates}) => {
    return (
        <div className="modal__content">
            <div className="templates__list">
                {templates.map(item => (
                        <div className="template__item list__item" key={item.id}>
                            <div className="template__info">
                                <h1 className="template__title">{item.title}</h1>
                                <p className="template__body">{item.body}</p>
                            </div>
                            <div className="template__edit">
                                <ButtonRemove/>
                                <ButtonEdit/>
                            </div>
                        </div>
                    )
                )}
            </div>
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