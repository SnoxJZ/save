import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import Input from "../ui/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button/Button";

const ChatInput = ({ newMessage, setNewMessage, handleSendMessage }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleEmojiClick = (emojiObject) => {
        setNewMessage(prevMessage => prevMessage + emojiObject.emoji);
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
            <button className="emoji__button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                <FontAwesomeIcon icon="fa-regular fa-face-smile" style={{ color: "rgb(123, 147, 182)", fontSize: "24px" }} />
            </button>
            {showEmojiPicker && (
                <div className="emoji-picker__container">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}
            <Button
                onClick={handleSendMessage}
                id="send__button"
            >
                <FontAwesomeIcon icon="fa-solid fa-paper-plane" style={{ color: "rgb(123, 147, 182)", fontSize: "20px" }} />
            </Button>
        </div>
    );
};

export default ChatInput;
