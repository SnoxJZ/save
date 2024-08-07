import React, { useEffect, useState } from 'react';
import StatusElement from "../Dialogs/DialogsStatus/StatusElement";
import Button from "../ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, message } from "antd";
import { useStatusService } from "../../API/useStatusService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../ui/Loader";

const ChatHeader = ({ selectedChat }) => {
    const { getStatuses, assignStatusToDialog, getDialogById } = useStatusService();
    const [statuses, setStatuses] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(null);
    const [fetchStatuses, isLoading, error] = useFetching(async () => {
        const data = await getStatuses();
        setStatuses(data);
    });

    const fetchDialogStatus = async (chatId) => {
        try {
            const dialog = await getDialogById(chatId);
            setCurrentStatus(dialog.status_id);
        } catch (error) {
            console.error("Error fetching dialog status", error);
        }
    };

    useEffect(() => {
        fetchStatuses();
        if (selectedChat) {
            fetchDialogStatus(selectedChat.chat_id); // Получение статуса диалога
        }
    }, [selectedChat]);

    const onClick = async ({ key }) => {
        try {
            const chatId = selectedChat.chat_id.toString();
            let newStatus = key;
            if (currentStatus === key) {
                newStatus = null;
            }
            await assignStatusToDialog(chatId, newStatus);
            setCurrentStatus(newStatus);
            if (newStatus) {
                message.success(`Статус ${key} присвоен диалогу`);
            } else {
                message.success(`Статус снят с диалога`);
            }
        } catch (error) {
            message.error('Ошибка присвоения статуса диалогу');
        }
    };

    const items = statuses.map(item => ({
        key: item.id,
        label: (
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: item.color, marginRight: "10px" }}></span>
                <StatusElement>{item.status}</StatusElement>
                {currentStatus === item.id && <FontAwesomeIcon icon="fa-solid fa-check" style={{ color: 'green', marginLeft: "10px" }} />}  {/* Зеленая галочка */}
            </div>
        ),
    }));

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="chat__header">
            <div className="dialog__info">
                {selectedChat ? <h1>{selectedChat.chat_title} (@{selectedChat.chat_username_or_id})</h1> : 'Выберите диалог'}
                {selectedChat ? selectedChat.name : 'Выберите диалог'}
            </div>
            {isLoading
                ? <div style={{ display: "flex", justifyContent: "center" }}><Loader /></div>
                : <div className="add_statuses">
                    <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
                        <Button onClick={(e) => e.preventDefault()}><FontAwesomeIcon
                            icon="fa-solid fa-ellipsis-vertical" /></Button>
                    </Dropdown>
                </div>
            }
        </div>
    );
};

export default ChatHeader;
