import React from 'react';

const ChatHeader = ({selectedChat}) => {
    return (
        <div className="chat__header">
            {selectedChat ? selectedChat.name : 'Выберите диалог'}
        </div>
    );
};

export default ChatHeader;