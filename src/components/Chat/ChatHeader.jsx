import React from 'react';
import StatusElement from "../Dialogs/DialogsStatus/StatusElement";
import Button from "../ui/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Dropdown, message} from "antd";

const ChatHeader = ({selectedChat, statuses}) => {

    const onClick = ({ key }) => {
        message.info(`Выбран статус ${key}`);
    };

    const items = statuses.map(item => ({
        key: item.id,
        label: (
            <StatusElement color={item.color} children={item.children}/>
        ),
    }));

    return (
        <div className="chat__header">
            <div className="dialog__info">
                {selectedChat ? <img src={selectedChat.avatar} alt="avatar" className="avatar"/> : 'Выберите диалог'}
                {selectedChat ? selectedChat.name : 'Выберите диалог'}
            </div>
            <div className="add_statuses">
                <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
                    <Button onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></Button>
                </Dropdown>
            </div>
        </div>
    );
};

export default ChatHeader;