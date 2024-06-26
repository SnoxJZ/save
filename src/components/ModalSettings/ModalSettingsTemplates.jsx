import React from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Textarea } from "../ui/textarea"



const ModalSettingsTemplates = ({templatesGroup, templates}) => {
    return (
        <div className="modal__content">
            <div className="templates__list">
                {templates.map(item => (
                        <div className="template__item" key={item.id}>
                            <div className="template__info">
                                <h1 className="template__title">{item.title}</h1>
                                <p className="template__body">{item.body}</p>
                            </div>
                            <div className="template__edit">
                                <Button id="template__remove">
                                    <FontAwesomeIcon icon="fa-solid fa-trash" style={{fontSize: "14px"}}/>
                                </Button>
                                <Button id="template__edit">
                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{fontSize: "14px"}}/>
                                </Button>
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