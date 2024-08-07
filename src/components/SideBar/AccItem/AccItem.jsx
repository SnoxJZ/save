import React from 'react';
import classes from './AccItem.module.css';

const AccItem = ({acc, onSelectAccount}) => {
    const counterClasses = [classes.acc__counter];
    if(acc.total_unread_count > 0) {
        counterClasses.push(classes.active);
    }

    return (
            <div className={classes.acc__item} title={acc.username} onClick={() => onSelectAccount(acc)}>
                <div className={classes.acc__avatar} >
                    <img src={`http://localhost:8000${acc.photo_url}`} alt="avatar" className={classes.acc__img}/>
                </div>
                <div className={counterClasses.join(' ')}>{acc.total_unread_count}</div>
            </div>
    );
};

export default AccItem;