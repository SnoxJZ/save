import React, {useEffect, useState} from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import ButtonEdit from "../ui/Button/ButtonEdit";
import ButtonRemove from "../ui/Button/ButtonRemove";
import { Select } from 'antd';
import {addAccount, deleteAccount, getAccounts, requestCode} from "../../API/useAccountsService";

const ModalSettingsAccounts = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneCodeHash, setPhoneCodeHash] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [proxyType, setProxyType] = useState('');
    const [proxyAddress, setProxyAddress] = useState('');
    const [proxyPort, setProxyPort] = useState('');
    const [proxyUsername, setProxyUsername] = useState('');
    const [proxyPassword, setProxyPassword] = useState('');
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const accountsData = await getAccounts();
                setAccounts(accountsData);
            } catch (error) {
                console.error("Failed to fetch accounts", error);
            }
        };

        fetchAccounts();
    }, []);

    const handleRequestCode = async (e) => {
        e.preventDefault();
        const proxySettings = {
            proxy_type: proxyType,
            host: proxyAddress,
            port: parseInt(proxyPort, 10),
            username: proxyUsername,
            password: proxyPassword
        };
        try {
            const response = await requestCode(phoneNumber, proxySettings);
            setPhoneCodeHash(response.phone_code_hash);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddAccount = async (e) => {
        e.preventDefault();
        const proxySettings = {
            proxy_type: proxyType,
            host: proxyAddress,
            port: parseInt(proxyPort, 10),
            username: proxyUsername,
            password: proxyPassword
        };
        try {
            const response = await addAccount(phoneNumber, code, phoneCodeHash, password, proxySettings);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (value) => {
        setProxyType(value);
    };

    const handleDeleteAccount = async (phoneNumber) => {
        try {
            await deleteAccount(phoneNumber);
            setAccounts(accounts.filter(acc => acc.phone_number !== phoneNumber));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal__content">
            <div className="account__details-wrapper">
                {accounts.map(acc => (
                        <div className="account__status list__item" key={acc._id}>
                            <div className="account__details">
                                <div className="acc__avatar">
                                    <img src={`http://localhost:8000/avatars/${acc.photo_path}`} alt="avatar" className="acc__img"/>
                                </div>
                                <div className="acc__desc">
                                    <h1>{acc.first_name} {acc.last_name}</h1>
                                    <p>{acc.phone_number}</p>
                                    <p>{acc.username}</p>
                                </div>
                            </div>
                            <div className="proxy__details">
                                {acc.proxy ? (
                                    <p>{acc.proxy.addr}:{acc.proxy.port}</p>
                                ) : (
                                    <p>No proxy configured</p>
                                )}
                            </div>
                            <div className="acc__edit">
                                <ButtonRemove onClick={() => handleDeleteAccount(acc.phone_number)}/>
                            </div>
                        </div>

                    )
                )}
            </div>
            <div className="account__connect">
                <form action="">
                    <div className="request">
                        <div className="proxy">
                            <Select
                                defaultValue="Type"
                                style={{width: "100%", }}
                                onChange={handleChange}
                                options={[
                                    { value: 'http', label: 'http' },
                                    { value: 'socks4', label: 'socks4' },
                                    { value: 'socks5', label: 'socks5' },
                                ]}
                            />
                            <Input type="text" placeholder='proxy address' value={proxyAddress} onChange={(e) => setProxyAddress(e.target.value)} />
                            <Input type="text" placeholder='port' value={proxyPort} onChange={(e) => setProxyPort(e.target.value)} />
                            <Input type="text" placeholder='login' value={proxyUsername} onChange={(e) => setProxyUsername(e.target.value)} />
                            <Input type="text" placeholder='password' value={proxyPassword} onChange={(e) => setProxyPassword(e.target.value)} />
                        </div>
                        <div className="phone_req">
                            <Input
                                type="text"
                                placeholder='Номер телефона'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <Button style={{ width: "100%" }} onClick={handleRequestCode}>Получить код и хэш</Button>
                        </div>
                    </div>
                    <div className="add__acc">
                        <Input type="text" placeholder='Код телеграма' value={code} onChange={(e) => setCode(e.target.value)} />
                        <Input type="text" placeholder='Хэш код' value={phoneCodeHash} onChange={(e) => setPhoneCodeHash(e.target.value)} />
                        <Input type="text" placeholder='Пароль (при наличии)' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button style={{ width: "100%" }} onClick={handleAddAccount}>Подключить аккаунт</Button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default ModalSettingsAccounts;