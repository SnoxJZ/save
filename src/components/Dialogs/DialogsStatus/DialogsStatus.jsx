import React, {useState} from 'react';
import classes from './DialogsStatus.module.css'
import StatusElement from "./StatusElement";

const DialogsStatus = () => {

    return (
        <div className={classes.dialogs__status}>
            <div className={classes.status__wrapper}>
                <StatusElement color={"yellow"} children={"Создан новый статус"} count={7}/>
                <StatusElement color={"red"} children={"В обработке"} count={10}/>
                <StatusElement color={"green"} children={"Второй сорт"} count={0}/>
                <StatusElement color={"purple"} children={"??"} count={2}/>
            </div>
        </div>
    );
};

export default DialogsStatus;