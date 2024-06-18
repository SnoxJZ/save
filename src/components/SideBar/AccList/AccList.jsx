import React from 'react';
import AccItem from "../AccItem/AccItem";
import classes from "./AccList.module.css"

const AccList = ({account}) => {
    return (
        <div className={classes.acc__list}>
            {account.map(acc =>
                <AccItem acc={acc} key={acc.id}/>
            )}
        </div>
    );
};

export default AccList;