import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const Chat = ({ selectedChat }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat__container">
            <ChatHeader selectedChat={selectedChat}/>
            <ChatMessages messages={messages}/>
            <div className="chat__input__container">
                <div className="chat__templates">
                    <button className="chat__template__button">Template 1</button>
                    <button className="chat__template__button">Template 2</button>
                    <button className="chat__template__button">Template 3</button>
                </div>
                <ChatInput newMessage={newMessage}
                           setNewMessage={setNewMessage}
                           handleSendMessage={handleSendMessage}
                           handleKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default Chat;
