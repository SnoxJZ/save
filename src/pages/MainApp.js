import React, {useState} from "react";
import '../styles/reset.css';
import '../styles/App.css';
import avatar from '../images/avatar.jpg'
import AccList from "../components/SideBar/AccList/AccList";
import SettingsBtn from "../components/SideBar/SettingsBtn/SettingsBtn";
import ModalSettings from "../components/ModalSettings/ModalSettings";
import {addAccount, getUserById, useService} from '../API/useService';
import DialogsHeader from "../components/Dialogs/DialogsHeader/DialogsHeader";
import {
    // ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../components/ui/resizable"
import DialogsStatus from "../components/Dialogs/DialogsStatus/DialogsStatus";
import DialogsList from "../components/Dialogs/DialogsList/DialogsList";
import Chat from "../components/Chat/Chat";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {AuthProvider} from "../context/AuthContext";

function MainApp() {

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

    const [templates, setTemplates] = useState([
        {id: 1, title: "Template 1", body: "Vivamus imperdiet gravida ipsum tincidunt semper. Vivamus."},
        {id: 2, title: "Template 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut sollicitudin nisi, ut condimentum sem. Suspendisse."},
        {id: 3, title: "Template 3", body: "Mauris et semper nisl, a tristique justo. Donec aliquet metus metus, in aliquet lorem blandit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},

    ])

    const [statuses, setStatuses] = useState([
        {id: "1", color: "yellow", children: "Создан новый статус", count: 7},
        {id: "2", color: "red", children: "В обработке", count: 10},
        {id: "3", color: "green", children: "Второй сорт", count: 0},
        {id: "4", color: "purple", children: "??", count: 2},
    ])

    const [jsonInput, setJsonInput] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [error, setError] = useState('');
    const [selectedChat, setSelectedChat] = useState({
        name: 'Диалог 1',
        messages: [
            { text: 'Привет, как дела?', sender: 'them', time: '15:00', status: 'read' },
            { text: 'Все хорошо, а у тебя?', sender: 'me', time: '15:05', status: 'unread' },
        ],
    });

    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
    };

    const { addAccount } = useService();
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
                // templates={templates}
                statuses={statuses}
            />
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel minSize={20} defaultSize={25}>
                    <div className="dialogs__column">
                        <div className="head__wrapper">
                            <DialogsHeader/>
                            <DialogsStatus statuses={statuses}/>
                        </div>
                        <div className="list__wrapper">
                            <DialogsList onSelectChat={handleSelectChat}/>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizablePanel minSize={75}>
                    {selectedChat
                        ? <Chat
                            selectedChat={selectedChat}
                            templates={templates}
                            statuses={statuses}
                        />
                        : <div className="chat__placeholder">Пожалуйста, выберите диалог</div>}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default MainApp;
library.add(fab, fas, far)