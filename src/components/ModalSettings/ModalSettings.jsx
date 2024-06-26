import React, { useState } from 'react';
import './ModalSettings.css';
import ModalSettingsHeader from "./ModalSettingsHeader";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import ModalSettingsAccounts from "./ModalSettingsAccounts";
import ModalSettingsTemplates from "./ModalSettingsTemplates";

const ModalSettings = ({ active, setActive, children, account, jsonInput, setJsonInput, handleAddUser, templates}) => {
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
            </div>
        </div>
    );
};

export default ModalSettings;
