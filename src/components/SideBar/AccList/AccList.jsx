import React, {useEffect, useState} from 'react';
import AccItem from "../AccItem/AccItem";
import classes from "./AccList.module.css"
import {getAccounts} from "../../../API/useAccountsService";

const AccList = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const accountsData = await getAccounts();
                setAccounts(accountsData);
            } catch (error) {
                console.error("Failed to fetch accounts", error);
            }
        };

        fetchAccounts();
    }, []);

    return (
        <div className={classes.acc__list}>
            {accounts.map(acc =>
                <AccItem acc={acc} key={acc.id}/>
            )}
        </div>
    );
};

export default AccList;