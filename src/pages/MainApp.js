import React, {useState} from "react";
import '../styles/reset.css';
import '../styles/App.css';
import AccList from "../components/SideBar/AccList/AccList";
import SettingsBtn from "../components/SideBar/SettingsBtn/SettingsBtn";
import ModalSettings from "../components/ModalSettings/ModalSettings";
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
import {DialogsProvider} from "../context/DialogsContext";

function MainApp() {
    const [modalActive, setModalActive] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);
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

    return (
        <DialogsProvider>
            <div className="App">
                <div className={"sidebar"}>
                    <AccList onSelectAccount={setSelectedAccount}/>
                    <SettingsBtn setActive={setModalActive}/>
                </div>
                <ModalSettings
                    active={modalActive}
                    setActive={setModalActive}
                />
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel minSize={20} defaultSize={25}>
                        <div className="dialogs__column">
                            <div className="head__wrapper">
                                <DialogsHeader selectedAccount={selectedAccount}/>
                                <DialogsStatus/>
                            </div>
                            <div className="list__wrapper">
                                {selectedAccount && (
                                    <DialogsList selectedAccount={selectedAccount} onSelectChat={handleSelectChat}/>
                                )}
                            </div>
                        </div>
                    </ResizablePanel>
                    <ResizablePanel minSize={75}>
                        {selectedChat
                            ? <Chat
                                selectedChat={selectedChat}
                            />
                            : <div className="chat__placeholder">Пожалуйста, выберите диалог</div>}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </DialogsProvider>
    );
}

export default MainApp;
library.add(fab, fas, far)