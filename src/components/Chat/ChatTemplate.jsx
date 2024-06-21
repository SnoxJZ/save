import React from 'react';
import Button from "../ui/Button/Button";

const ChatTemplate = ({text}) => {
    return (
        <div className="chat__templates">
            <Button className="chat__template__button">{text}</Button>
        </div>
    );
};

export default ChatTemplate;