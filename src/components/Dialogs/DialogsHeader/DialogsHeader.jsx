import React from 'react';
import classes from "../../SideBar/SettingsBtn/SettingsBtn.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const DialogsHeader = () => {
    return (
        <div className="dialogs__header">
            <button className={classes.settings} title="Настройки">
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "18px"}}/>
            </button>
        </div>
    );
};

export default DialogsHeader;