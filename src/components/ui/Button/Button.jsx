import React from 'react';
import classes from './Button.module.css';

const Button = ({ children, onClick, preventDefault = false, ...props }) => {
    const handleClick = (e) => {
        if (preventDefault) {
            e.preventDefault();
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button {...props} className={classes.myBtn} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
