import React, {useState} from 'react';
import classes from "./DialogsStatus.module.css";

const StatusElement = ({color, children, count}) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive);
    //     функция фильтрации
    }
    
    const style = {
        backgroundColor: color,
    }

    return (
        <div className={`${classes.status__elem} ${isActive ? classes.active : ''}`} style={style} onClick={handleClick}>
            <span className={classes.status__text}>{children}</span>
            <span className={classes.status__count}>{count}</span>
        </div>
    );
};

export default StatusElement;