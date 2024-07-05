import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGears, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import classes from "./SettingsBtn.module.css"
import {useAuth} from "../../../context/AuthContext";

const SettingsBtn = ({setActive}) => {

    const { logout } = useAuth();

    return (
        <div className={classes.sidebar__footer}>
            <button className={classes.settings} title="Настройки" onClick={() => setActive(true)}>
                <FontAwesomeIcon icon={faGears} style={{color: "#ffffff", fontSize: "18px"}}/>
            </button>
            <button className={classes.settings} title="Выйти" onClick={() => logout()}>
                <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ffffff", fontSize: "18px"}}/>
            </button>
        </div>
    );
};

export default SettingsBtn;