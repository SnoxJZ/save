import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Button";
import "./style.css";

const ButtonEdit = ({...props}) => {
    return (
        <Button {...props} id="editBtn">
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{fontSize: "14px"}}/>
        </Button>
    );
};

export default ButtonEdit;