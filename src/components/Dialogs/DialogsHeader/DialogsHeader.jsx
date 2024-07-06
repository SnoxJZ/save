import React, { useContext, useState } from 'react';
import classes from './DialogsHeader.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useFetching } from "../../../hooks/useFetching";
import { getDialogs, getUnreadDialogs } from "../../../API/useMessagesService";
import { DialogsContext } from "../../../context/DialogsContext";
import {Spin} from "antd";

const DialogsHeader = ({ selectedAccount }) => {
    const { setDialogs } = useContext(DialogsContext);
    const [showingUnread, setShowingUnread] = useState(false);

    const [fetchDialogs, isLoadingAll, errorAll] = useFetching(async () => {
        if (selectedAccount) {
            const data = await getDialogs(selectedAccount.phone_number);
            setDialogs(data.dialogs);
            setShowingUnread(false);
        }
    });

    const [fetchUnreadDialogs, isLoadingUnread, errorUnread] = useFetching(async () => {
        if (selectedAccount) {
            const data = await getUnreadDialogs(selectedAccount.phone_number);
            setDialogs(data.dialogs);
            setShowingUnread(true);
        }
    });

    const toggleDialogs = () => {
        if (showingUnread) {
            fetchDialogs();
        } else {
            fetchUnreadDialogs();
        }
    };

    return (
        <div className={classes.dialogs__header}>
            {isLoadingAll || isLoadingUnread ? <Spin/> :
                <button
                    className={classes.unreaded}
                    title={showingUnread ? "Показать все" : "Показать непрочитанные"}
                    onClick={toggleDialogs}

                >
                    <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "18px", color: "#7b93b6"}}/>
                </button>
            }

            {(errorAll || errorUnread) && <p className={classes.error}>{errorAll || errorUnread}</p>}
        </div>
    );
};

export default DialogsHeader;
