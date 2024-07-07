import React, { useEffect } from 'react';
import ChatMessage from "./ChatMessage";

const ChatMessages = ({ messages, messagesEndRef, userId }) => {

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat__messages">
            {messages.slice().reverse().map((msg) => (
                <ChatMessage msg={msg} key={msg.message_id} userId={userId} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatMessages;
