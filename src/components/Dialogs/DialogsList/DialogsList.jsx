import React from 'react';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import './DialogsList.css'
import mockConversations from "./MokData"

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);


const DialogsList = () => {
    return (
        <div className="dialogs__list">
            <ScrollArea.Root className="ScrollAreaRoot">
                <ScrollArea.Viewport className="ScrollAreaViewport">
                    <div style={{padding: '15px 20px'}}>
                        {mockConversations.map((conversation) => (
                            <div className="conversation" key={conversation.id}>
                                <img src={conversation.avatar} alt="avatar" className="avatar"/>
                                <div className="conversation__details">
                                    <div className="name__time">
                                        <span className="name">{conversation.name}</span>
                                        <span className="time">{conversation.lastMessage.time}</span>
                                    </div>
                                    <div className="message__status">
                                        <span className="message">{conversation.lastMessage.text}</span>
                                        {conversation.lastMessage.sender === 'them' && conversation.status === 'unread' && (
                                            <span className="unread__count">
                                                {conversation.lastMessage.unreadCount}
                                            </span>
                                        )}
                                        {conversation.lastMessage.sender === 'me' && conversation.status === 'read' && (
                                            <span className="message__status__icon read">✓✓</span>
                                        )}
                                        {conversation.lastMessage.sender === 'me' && conversation.status === 'unread' && (
                                            <span className="message__status__icon unread">✓</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb"/>
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb"/>
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner"/>
            </ScrollArea.Root>
        </div>
    );
};

export default DialogsList;