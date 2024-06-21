import React from 'react';

const ChatMessage = ({msg}) => {
    return (
        <div className={`chat__message ${msg.sender}`}>
            <span className="chat__message__text">{msg.text}</span>
            <span className="chat__message__time">{msg.time}</span>
            {msg.sender === 'me' && (
                <span className={`chat__message__status ${msg.status === 'read' ? 'read' : 'unread'}`}>
                    {msg.status === 'read' ? '✓✓' : '✓'}
                </span>
            )}
        </div>
    );
};

export default ChatMessage;