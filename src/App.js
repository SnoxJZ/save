import React, {useState} from "react";
import AccItem from "./components/SideBar/AccItem/AccItem";
import './styles/reset.css';
import './styles/App.css';
import avatar from './images/avatar.jpg'
import AccList from "./components/SideBar/AccList/AccList";
import SettingsBtn from "./components/SideBar/SettingsBtn/SettingsBtn";
import ModalSettings from "./components/ModalSettings/ModalSettings";
import { addAccount, getUserById } from './API/user';
import DialogsHeader from "./components/Dialogs/DialogsHeader/DialogsHeader";

function App() {

    const [account, setAccount] = useState([
        {id: "@1", avatar: avatar, name: "Name Surname", messages: 2},
        {id: "@2", avatar: avatar, name: "Name1 Surname1", messages: 0},
        {id: "@3", avatar: avatar, name: "Name2 Surname2", messages: 3},
        {id: "@4", avatar: avatar, name: "Name3 Surname3", messages: 0},
        {id: "@5", avatar: avatar, name: "Name4 Surname4", messages: 0},
        {id: "@6", avatar: avatar, name: "Name5 Surname5", messages: 1},
        {id: "@7", avatar: avatar, name: "Name6 Surname6", messages: 0},
        {id: "@8", avatar: avatar, name: "Name7 Surname7", messages: 0},
        {id: "@9", avatar: avatar, name: "Name8 Surname8", messages: 2},
        {id: "@10", avatar: avatar, name: "Name9 Surname9", messages: 2},
        {id: "@11", avatar: avatar, name: "Name10 Surname10", messages: 0},
        {id: "@12", avatar: avatar, name: "Name11 Surname11", messages: 0},
        {id: "@13", avatar: avatar, name: "Name12 Surname12", messages: 0},
        {id: "@14", avatar: avatar, name: "Name13 Surname13", messages: 0},
        {id: "@15", avatar: avatar, name: "Name14 Surname14", messages: 4},
        {id: "@16", avatar: avatar, name: "Name15 Surname15", messages: 8},
        {id: "@17", avatar: avatar, name: "Name16 Surname16", messages: 1},
        {id: "@18", avatar: avatar, name: "Name17 Surname17", messages: 0}
    ]);

    const [jsonInput, setJsonInput] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [error, setError] = useState('');

    const handleAddUser = async () => {
        try {
            const accObject = JSON.parse(jsonInput);
            const addedAcc = await addAccount(accObject);
            console.log('User created:', addedAcc);
        } catch (err) {
            console.error('Error creating user:', err);
            setError('Error creating user');
        }
    };

  return (
    <div className="App">
        <div className={"sidebar"}>
            <AccList account={account}/>
            <SettingsBtn setActive={setModalActive}/>
        </div>
        <ModalSettings
            active={modalActive}
            setActive={setModalActive}
            account={account}
            jsonInput={jsonInput}
            setJsonInput={setJsonInput}
            handleAddUser={handleAddUser}
        />
        <div className="dialogs__column">
            <DialogsHeader/>
            <div className="dialogs__status">

            </div>
            <div className="dialogs__list">

            </div>
        </div>
    </div>
  );
}

export default App;
