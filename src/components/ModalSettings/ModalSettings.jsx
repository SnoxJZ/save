import React, { useState } from 'react';
import './ModalSettings.css';
import ModalSettingsHeader from "./ModalSettingsHeader";
import ModalSettingsAccounts from "./ModalSettingsAccounts";
import ModalSettingsTemplates from "./ModalSettingsTemplates";
import ModalSettingsStatuses from "./ModalSettingsStatuses";
import ModalSettingsAdmin from "./ModalSettingsAdmin";

const ModalSettings = ({ active, setActive, account, jsonInput, setJsonInput, handleAddUser, statuses}) => {
    const [openTab, setOpenTab] = useState('accounts');

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__tab active" : "modal__tab"} onClick={(e) => e.stopPropagation()}>
                <ModalSettingsHeader openTab={openTab} setOpenTab={setOpenTab}/>
                {openTab === 'accounts' && (
                    <ModalSettingsAccounts/>
                )}
                {openTab === 'templates' && (
                    <ModalSettingsTemplates />
                )}
                {openTab === 'statuses' && (
                    <ModalSettingsStatuses statuses={statuses}/>
                )}
                {openTab === 'admin' && (
                    <ModalSettingsAdmin/>
                )}
            </div>
        </div>
    );
};

export default ModalSettings;
