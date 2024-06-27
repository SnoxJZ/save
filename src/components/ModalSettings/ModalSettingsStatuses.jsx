import React from 'react';
import ButtonRemove from "../ui/Button/ButtonRemove";
import ButtonEdit from "../ui/Button/ButtonEdit";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import StatusElement from "../Dialogs/DialogsStatus/StatusElement";
import { ColorPicker } from 'antd';

const ModalSettingsStatuses = ({statuses}) => {
    return (
        <div className="modal__content">
            <div className="statuses__list">
                {statuses.map(item => (
                        <div className="status__item list__item" key={item.id}>
                            <div className="status__info">
                                <StatusElement color={item.color} children={item.children} count={item.count}/>
                            </div>
                            <div className="status__edit">
                                <ButtonRemove/>
                                <ButtonEdit/>
                            </div>
                        </div>
                    )
                )}
            </div>
            <form action="" className="statuses__add">
                <Input
                    type="text"
                    placeholder='Введите название статуса'
                />
                <div className="statuses__color">
                    <ColorPicker defaultValue="#1677ff" size="large" showText={(color) => <span>Цвет статуса ({color.toHexString()})</span>} />
                    <Button preventDefault>Добавить статус</Button>
                </div>

            </form>

        </div>
    );
};

export default ModalSettingsStatuses;