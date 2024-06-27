import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Button";
import "./style.css";

const ButtonRemove = ({...props}) => {
    return (
        <Button {...props} id="removeBtn">
            <FontAwesomeIcon icon="fa-solid fa-trash" style={{fontSize: "14px"}}/>
        </Button>
    );
};

export default ButtonRemove;