import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import {Button, Dropdown} from "antd";

const Chat = ({ selectedChat, templates, statuses }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const items = templates.map(item => ({
        key: item.id,
        label: (
            <h1 className="template__title" style={{fontSize: "14px"}}>{item.title}</h1>
        ),
    }));

    useEffect(() => {
        if (selectedChat) {
            setMessages(selectedChat.messages || []);
        }
    }, [selectedChat]);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMsg = {
                text: newMessage,
                sender: 'me',
                time: new Date().toLocaleTimeString(),
                status: 'unread',
            };
            setMessages(prevMessages => [...(prevMessages || []), newMsg]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat__container">
            <ChatHeader selectedChat={selectedChat} statuses={statuses}/>
            <ChatMessages messages={messages}/>
            <div className="chat__input__container">
                <div>
                    <Dropdown
                        menu={{ items }}
                        placement="topLeft"
                        arrow
                    >
                        <Button>Шаблоны</Button>
                    </Dropdown>
                </div>
                <ChatInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
