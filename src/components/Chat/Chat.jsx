import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatTemplate from "./ChatTemplate";
import { getChatMessages, sendChatMessage } from '../../API/useMessagesService';
import { useFetching } from "../../hooks/useFetching";
import {Spin} from "antd";

const Chat = ({ selectedChat, statuses, userId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const [fetchMessages, isLoading, error] = useFetching(async () => {
        const data = await getChatMessages(selectedChat.phone_number, selectedChat.chat_id);
        setMessages(data.messages);
        scrollToBottom();
    });

    useEffect(() => {
        if (selectedChat) {
            fetchMessages();
        }
    }, [selectedChat]);

    useEffect(() => {
        if (selectedChat) {
            const newWs = new WebSocket(`ws://localhost:8000/telegram/ws/${selectedChat.phone_number}`);
            newWs.onopen = () => {
                console.log('WebSocket connection established');
            };
            newWs.onmessage = (event) => {
                try {
                    const receivedAt = Date.now();
                    const messageData = JSON.parse(event.data);
                    const parsedAt = Date.now();
                    console.log(`Message received at: ${receivedAt}, parsed at: ${parsedAt}, delay: ${parsedAt - receivedAt} ms`);

                    if (messageData.chat_id === selectedChat.chat_id) {
                        const newMessage = {
                            message_id: messageData.message_id,
                            message_text: messageData.message_text,
                            date: messageData.date,
                            sender_name: messageData.sender_name,
                            sender_username_or_id: messageData.sender_username_or_id,
                            is_sender_me: false,
                            is_read: messageData.is_read
                        };
                        setMessages(prevMessages => [newMessage, ...prevMessages]);
                        scrollToBottom();
                    }
                } catch (error) {
                    console.error('Error parsing WebSocket message:', error);
                }
            };
            return () => {
                newWs.close();
            };
        }
    }, [selectedChat]);

    const handleSendMessage = async () => {
        if (newMessage.trim() !== '') {
            try {
                const tempMessageId = new Date().getTime();
                const newMsg = {
                    message_id: tempMessageId,
                    message_text: newMessage,
                    date: new Date().toISOString(),
                    sender_name: userId,
                    sender_username_or_id: userId,
                    is_sender_me: true,
                    is_read: false
                };

                setMessages(prevMessages => [newMsg, ...prevMessages]);
                setNewMessage('');
                scrollToBottom();

                const sentAt = Date.now();
                console.log(`Message sent at: ${sentAt}`);

                await sendChatMessage(selectedChat.phone_number, selectedChat.chat_id, newMessage);

                setMessages(prevMessages => prevMessages.map(msg =>
                    msg.message_id === tempMessageId
                        ? { ...msg, message_id: newMsg.message_id }
                        : msg
                ));
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="chat__container">
            <ChatHeader selectedChat={selectedChat} statuses={statuses} />
            {isLoading ? (
                <Spin style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}/>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <ChatMessages messages={messages} messagesEndRef={messagesEndRef} userId={userId} />
            )}
            <div className="chat__input__container">
                <ChatTemplate setNewMessage={setNewMessage} />
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
