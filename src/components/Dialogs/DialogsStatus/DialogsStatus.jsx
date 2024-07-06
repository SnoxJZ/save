import React, {useEffect, useState} from 'react';
import classes from './DialogsStatus.module.css'
import StatusElement from "./StatusElement";
import {useStatusService} from "../../../API/useStatusService";
import {useFetching} from "../../../hooks/useFetching";
import Loader from "../../ui/Loader";

const DialogsStatus = () => {

    const { getStatuses} = useStatusService();
    const [statuses, setStatuses] = useState([]);
    const [fetchStatuses, isLoading, error] = useFetching(async () => {
        const data = await getStatuses();
        setStatuses(data);
    });

    useEffect(() => {
        fetchStatuses();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className={classes.dialogs__status}>
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <div className={classes.status__wrapper}>
                    {statuses.map(item => (
                            <StatusElement color={item.color} children={item.status} count={item.count} key={item.id}/>
                        )
                    )}
                </div>
            }
        </div>
    );
};

export default DialogsStatus;