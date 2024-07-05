import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatTemplate from "./ChatTemplate";

const Chat = ({ selectedChat, statuses }) => {
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

    return (
        <div className="chat__container">
            <ChatHeader selectedChat={selectedChat} statuses={statuses}/>
            <ChatMessages messages={messages}/>
            <div className="chat__input__container">

                <ChatTemplate setNewMessage={setNewMessage}/>

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
