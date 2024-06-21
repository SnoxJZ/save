import React from 'react';

const ChatHeader = ({selectedChat}) => {
    return (
        <div className="chat__header">
            {selectedChat ? <img src={selectedChat.avatar} alt="avatar" className="avatar"/> : 'Выберите диалог'}
            {selectedChat ? selectedChat.name : 'Выберите диалог'}
        </div>
    );
};

export default ChatHeader;