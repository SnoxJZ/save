import React, { useState } from 'react';
import classes from "./DialogsStatus.module.css";
import { useFetching } from "../../../hooks/useFetching";

const StatusElement = ({ color, children, count, statusId, fetchDialogs }) => {
    const [isActive, setIsActive] = useState(false);

    // Используем useFetching для fetchDialogs
    const [fetchStatusDialogs, isLoading, error] = useFetching(async () => {
        if (isActive) {
            await fetchDialogs("reset"); // При повторном клике сбрасываем статус и показываем все диалоги
        } else {
            await fetchDialogs(statusId);
        }
        setIsActive(!isActive);
    });

    const handleClick = async () => {
        fetchStatusDialogs();
    };

    return (
        <div
            className={`${classes.status__elem} ${isActive ? classes.active : ''}`}
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            <span className={classes.status__text}>{children}</span>
            <span className={classes.status__count}>{count}</span>
        </div>
    );
};

export default StatusElement;
