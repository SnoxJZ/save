import React, { useState } from 'react';
import './ModalSettings.css';
import ModalSettingsHeader from "./ModalSettingsHeader";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const ModalSettings = ({ active, setActive, children, account, jsonInput, setJsonInput, handleAddUser}) => {
    const [openTab, setOpenTab] = useState('accounts');

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__tab active" : "modal__tab"} onClick={(e) => e.stopPropagation()}>
                <ModalSettingsHeader openTab={openTab} setOpenTab={setOpenTab}/>

                    {openTab === 'accounts' && (
                        <div className="modal__content">
                            <div className="account__details-wrapper">
                                {account.map(acc => (
                                        <div className="account__status" key={acc.id}>
                                            <div className="account__details">
                                                <div className="acc__avatar">
                                                    <img src={acc.avatar} alt="avatar" className="acc__img"/>
                                                </div>
                                                <div className="acc__desc">
                                                    <h1>{acc.name}</h1>
                                                    <p>{acc.id}</p>
                                                </div>
                                            </div>
                                            <div className="proxy__details">
                                                <p>proxy_address:port</p>
                                            </div>
                                        </div>

                                    )
                                )}
                            </div>
                            <div className="account__connect">
                                <Input
                                    type="text"
                                    placeholder='{ "username": "your_username", "password": "your_password" }'
                                    value={jsonInput}
                                    onChange={(e) => setJsonInput(e.target.value)}
                                />
                                <Button id="json__conn" onClick={handleAddUser}>Войти через JSON</Button>
                            </div>
                        </div>
                    )}

            </div>
        </div>
    );
};

export default ModalSettings;
