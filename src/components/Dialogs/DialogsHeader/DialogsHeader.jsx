import React from 'react';
import classes from './DialogsHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const DialogsHeader = () => {
    return (
        <div className={classes.dialogs__header}>
            <button className={classes.unreaded} title="Настройки">
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "18px", color: "#7b93b6"}}/>
            </button>
        </div>
    );
};

export default DialogsHeader;