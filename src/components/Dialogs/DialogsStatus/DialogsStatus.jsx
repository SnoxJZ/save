import React, {useState} from 'react';
import classes from './DialogsStatus.module.css'
import StatusElement from "./StatusElement";

const DialogsStatus = ({statuses}) => {

    return (
        <div className={classes.dialogs__status}>
            <div className={classes.status__wrapper}>
                {statuses.map(item => (
                        <StatusElement color={item.color} children={item.children} count={item.count}/>
                    )
                )}
            </div>
        </div>
    );
};

export default DialogsStatus;