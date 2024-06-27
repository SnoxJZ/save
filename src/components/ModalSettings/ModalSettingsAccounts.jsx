import React from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import ButtonEdit from "../ui/Button/ButtonEdit";
import ButtonRemove from "../ui/Button/ButtonRemove";

const ModalSettingsAccounts = ({account, jsonInput, setJsonInput, handleAddUser}) => {
    return (
        <div className="modal__content">
            <div className="account__details-wrapper">
                {account.map(acc => (
                        <div className="account__status list__item" key={acc.id}>
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
                            <div className="acc__edit">
                                <ButtonRemove/>
                                <ButtonEdit/>
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
    );
};

export default ModalSettingsAccounts;