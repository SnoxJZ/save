import React, { useState } from 'react';
import './ModalSettings.css';
import ModalSettingsHeader from "./ModalSettingsHeader";
import ModalSettingsAccounts from "./ModalSettingsAccounts";
import ModalSettingsTemplates from "./ModalSettingsTemplates";
import ModalSettingsStatuses from "./ModalSettingsStatuses";

const ModalSettings = ({ active, setActive, children, account, jsonInput, setJsonInput, handleAddUser, templates, statuses}) => {
    const [openTab, setOpenTab] = useState('accounts');

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__tab active" : "modal__tab"} onClick={(e) => e.stopPropagation()}>
                <ModalSettingsHeader openTab={openTab} setOpenTab={setOpenTab}/>
                {openTab === 'accounts' && (
                    <ModalSettingsAccounts
                        account={account}
                        jsonInput={jsonInput}
                        setJsonInput={setJsonInput}
                        handleAddUser={handleAddUser}
                    />
                )}
                {openTab === 'templates' && (
                    <ModalSettingsTemplates templates={templates}/>
                )}
                {openTab === 'statuses' && (
                    <ModalSettingsStatuses statuses={statuses}/>
                )}
            </div>
        </div>
    );
};

export default ModalSettings;
