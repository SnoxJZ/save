import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

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



    return (
        <div className="chat__container">
            <ChatHeader selectedChat={selectedChat}/>
            <ChatMessages messages={messages}/>
            <div className="chat__input__container">
                <div style={{marginLeft: "20px"}}>
                    <DropdownMenu>
                        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile Profile Profile Profile Profile Profile </DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <ChatInput newMessage={newMessage}
                           setNewMessage={setNewMessage}
                           handleSendMessage={handleSendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
