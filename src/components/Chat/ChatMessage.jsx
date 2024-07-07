import React from 'react';

const ChatMessage = ({ msg, userId }) => {

    const messageTime = new Date(msg.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const isSender = msg.sender_username_or_id === userId;
    const messageClass = msg.is_sender_me ? 'me' : 'them';

    return (
        <div className={`chat__message ${messageClass}`}>
            <span className="chat__message__text">{msg.message_text}</span>
            <span className="chat__message__time">{messageTime}</span>
            {msg.is_sender_me ? (
                <span className={`chat__message__status ${msg.is_read ? 'read' : 'unread'}`}>
                    {msg.is_read ? '✓✓' : '✓'}
                </span>
            ) : ''}
        </div>
    );
};


export default ChatMessage;
