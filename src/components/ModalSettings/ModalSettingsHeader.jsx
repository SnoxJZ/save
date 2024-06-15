import React from 'react';
import './ModalSettings.css'

const ModalSettingsHeader = ({openTab, setOpenTab}) => {
    return (
        <div className="modal__header">
            <ul className="modal__header-items">
                <li
                    className={openTab === 'accounts' ? "md__header-item active" : "md__header-item"}
                    onClick={() => setOpenTab('accounts')}
                >
                    Аккаунты
                </li>
                <li
                    className={openTab === 'templates' ? "md__header-item active" : "md__header-item"}
                    onClick={() => setOpenTab('templates')}
                >
                    Шаблоны
                </li>
                <li
                    className={openTab === 'statuses' ? "md__header-item active" : "md__header-item"}
                    onClick={() => setOpenTab('statuses')}
                >
                    Статусы
                </li>
            </ul>
        </div>
    );
};

export default ModalSettingsHeader;