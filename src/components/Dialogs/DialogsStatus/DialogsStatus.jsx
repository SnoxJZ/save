import React, { useEffect, useState } from 'react';
import classes from './DialogsStatus.module.css';
import StatusElement from "./StatusElement";
import { useStatusService } from "../../../API/useStatusService";
import { useFetching } from "../../../hooks/useFetching";
import Loader from "../../ui/Loader";

const DialogsStatus = ({ onStatusChange, fetchAllDialogs }) => {
    const { getStatuses, getDialogsByStatus } = useStatusService();
    const [statuses, setStatuses] = useState([]);
    const [fetchStatuses, isLoading, error] = useFetching(async () => {
        const data = await getStatuses();
        setStatuses(data);
    });

    useEffect(() => {
        fetchStatuses();
    }, []);

    const fetchDialogs = async (statusId) => {
        if (statusId === "reset") {
            await fetchAllDialogs(); // Вызываем функцию для загрузки всех диалогов
        } else {
            try {
                const data = await getDialogsByStatus(statusId);
                onStatusChange(data.dialogs);  // Передаем обновленные диалоги в родительский компонент
            } catch (error) {
                console.error("Error fetching dialogs", error);
            }
        }
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div className={classes.dialogs__status}>
            {isLoading
                ? <div style={{ display: "flex", justifyContent: "center" }}><Loader /></div>
                : <div className={classes.status__wrapper}>
                    {statuses.map(item => (
                        <StatusElement
                            color={item.color}
                            children={item.status}
                            count={item.count}
                            key={item.id}
                            statusId={item.id}
                            fetchDialogs={fetchDialogs}  // Передаем fetchDialogs
                        />
                    ))}
                    <StatusElement
                        color="#000000"
                        children="Все"
                        count={0}
                        statusId="reset"
                        fetchDialogs={fetchDialogs}  // Перерендеринг для сброса статуса
                    />
                </div>
            }
        </div>
    );
};

export default DialogsStatus;
