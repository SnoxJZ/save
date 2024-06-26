import React from 'react';
import classes from './AccItem.module.css';

const AccItem = ({acc, setAccount}) => {
    const counterClasses = [classes.acc__counter];

    if(acc.messages > 0) {
        counterClasses.push(classes.active);
    }

    return (
            <div className={classes.acc__item}  title={acc.name}>
                <div className={classes.acc__avatar} >
                    <img src={acc.avatar} alt="avatar" className={classes.acc__img}/>
                </div>
                <div className={counterClasses.join(' ')}>{acc.messages}</div>
            </div>
    );
};

export default AccItem;