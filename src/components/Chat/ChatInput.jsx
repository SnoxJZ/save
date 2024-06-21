import React from 'react';
import Input from "../ui/Input/Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../ui/Button/Button";

const ChatInput = ({newMessage, setNewMessage, handleSendMessage}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat__input">
            <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Введите сообщение"
            />
            <button className="emoji__button">
                <FontAwesomeIcon icon="fa-regular fa-face-smile" style={{color: "rgb(123, 147, 182)", fontSize: "24px", marginRight: "10px"}}/>
            </button>
            <Button
                onClick={handleSendMessage}
                id="send__button"
            >
                <FontAwesomeIcon icon="fa-solid fa-paper-plane" style={{color: "rgb(123, 147, 182)", fontSize: "20px"}}/>
            </Button>
        </div>
    );
};

export default ChatInput;