import React, {useEffect, useRef, useState} from 'react';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import './DialogsList.css'
import {getDialogs} from "../../../API/useMessagesService";
import Button from "../../ui/Button/Button";

const DialogsList = ({selectedAccount}) => {

    const rootRef = useRef(null);
    const [dialogs, setDialogs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchDialogs = async () => {
        try {
            const { dialogs: newDialogs, total_unread_count } = await getDialogs(selectedAccount.phone_number, offset, 20);
            setDialogs(prevDialogs => [...prevDialogs, ...newDialogs]);
            setOffset(prevOffset => prevOffset + 20);
            if (newDialogs.length < 20) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Failed to fetch dialogs", error);
        }
    };

    useEffect(() => {
        if (selectedAccount) {
            setDialogs([]);
            setOffset(0);
            setHasMore(true);
            fetchDialogs();
        }
    }, [selectedAccount]);

    useEffect(() => {
        if (rootRef.current) {
            const divs = rootRef.current.querySelectorAll('div[style]');
            divs.forEach(div => {
                const styles = div.getAttribute('style');
                if (styles.includes('display: table')) {
                    div.setAttribute('style', styles.replace('display: table;', ''));
                }
            });
        }
    }, []);

    return (
        <div className="dialogs__list">
            <ScrollArea.Root className="ScrollAreaRoot" ref={rootRef}>
                <ScrollArea.Viewport className="ScrollAreaViewport">
                    <div style={{padding: '15px 0 15px 20px'}}>
                        {dialogs.map((conversation) => (
                            <div className="conversation" key={conversation.chat_id} >
                                <img src={conversation.chat_photo_url} alt="avatar" className="avatar"/>
                                <div className="conversation__details">
                                    <div className="name__time">
                                        <span className="name">{conversation.chat_title}</span>
                                        <div>
                                            {conversation.last_message_read && (
                                                <span className="message__status__icon read">✓✓</span>
                                            )}
                                            {!conversation.last_message_read && (
                                                <span className="message__status__icon unread">✓</span>
                                            )}
                                            <span
                                                className="time">{new Date(conversation.last_message_date).toLocaleTimeString()}
                                            </span>
                                        </div>

                                    </div>
                                    <div className="message__status">
                                        <span className="message">{conversation.last_message}</span>
                                        {conversation.unread_count > 0 && (
                                            <span className="unread__count">
                                                {conversation.unread_count}
                                            </span>
                                        )}

                                    </div>
                                </div>
                            </div>
                        ))}
                        {hasMore && (
                            <Button onClick={fetchDialogs}>Load More</Button>
                        )}
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb"/>
                </ScrollArea.Scrollbar>

                <ScrollArea.Corner className="ScrollAreaCorner"/>
            </ScrollArea.Root>
        </div>
    );
};

export default DialogsList;