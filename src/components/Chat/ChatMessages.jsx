import React, {useEffect, useRef} from 'react';
import ChatMessage from "./ChatMessage";

const ChatMessages = ({messages}) => {

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat__messages">
            {messages.map((msg, index) => (
                <ChatMessage msg={msg} key={index}/>
            ))}
            <div ref={messagesEndRef}/>
        </div>
    );
};

export default ChatMessages;