import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears} from "@fortawesome/free-solid-svg-icons";
import classes from "./SettingsBtn.module.css"

const SettingsBtn = ({setActive}) => {
    return (
        <div className={classes.sidebar__footer}>
            <button className={classes.settings} title="Настройки" onClick={() => setActive(true)}>
                <FontAwesomeIcon icon={faGears} style={{color: "#ffffff", fontSize: "18px"}} />
            </button>
        </div>
    );
};

export default SettingsBtn;