import React, { useEffect, useContext, useRef, useState } from 'react';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import './DialogsList.css';
import { getDialogs } from "../../../API/useMessagesService";
import { Button, Spin } from "antd";
import { useFetching } from "../../../hooks/useFetching";
import { DialogsContext } from "../../../context/DialogsContext";

const DialogsList = ({ selectedAccount, onSelectChat }) => {
    const rootRef = useRef(null);
    const { dialogs, setDialogs } = useContext(DialogsContext);
    const [limit, setLimit] = useState(40);
    const [hasMore, setHasMore] = useState(true);

    const [fetchDialogs, isLoading, error] = useFetching(async () => {
        try {
            const { dialogs: newDialogs, total_unread_count } = await getDialogs(selectedAccount.phone_number, 0, limit);
            setDialogs(prevDialogs => {
                const updatedDialogs = [...newDialogs];
                // Убираем дубликаты диалогов
                const uniqueDialogs = Array.from(new Set(updatedDialogs.map(d => d.chat_id)))
                    .map(id => updatedDialogs.find(d => d.chat_id === id));
                return uniqueDialogs;
            });
            setLimit(prevLimit => prevLimit + 20);
            if (newDialogs.length < limit) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Failed to fetch dialogs", error);
        }
    });

    useEffect(() => {
        if (selectedAccount) {
            setDialogs([]);
            setLimit(40);
            setHasMore(true);
            fetchDialogs();
        }
    }, [selectedAccount]);

    useEffect(() => {
        if (selectedAccount) {
            const ws = new WebSocket(`ws://localhost:8000/telegram/ws/${selectedAccount.phone_number}`);
            ws.onmessage = async (event) => {
                await fetchDialogs();
            };
            return () => {
                ws.close();
            };
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
                    <div style={{ padding: '15px 0 15px 20px' }}>
                        {dialogs.map((conversation) => (
                            <div
                                className="conversation"
                                key={conversation.chat_id}
                                onClick={() => onSelectChat({ ...conversation, phone_number: selectedAccount.phone_number })}
                            >
                                <div className="conversation__details">
                                    <div className="name__time">
                                        <span className="name">{conversation.chat_title}</span>
                                        <div>
                                            {conversation.last_message_read && conversation.is_sender_me && (
                                                <span className="message__status__icon read">✓✓</span>
                                            )}
                                            {!conversation.last_message_read && conversation.is_sender_me && (
                                                <span className="message__status__icon unread">✓</span>
                                            )}
                                            <span
                                                className="time">{new Date(conversation.last_message_date).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}</span>
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
                        <div style={{ textAlign: 'center', padding: '20px 0' }}>
                            {hasMore && (
                                isLoading ? <Spin /> : <Button onClick={fetchDialogs}>Load more...</Button>
                            )}
                        </div>
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
        </div>
    );
};

export default DialogsList;
