import React, { createContext, useState } from 'react';

export const DialogsContext = createContext();

export const DialogsProvider = ({ children }) => {
    const [dialogs, setDialogs] = useState([]);

    return (
        <DialogsContext.Provider value={{ dialogs, setDialogs }}>
            {children}
        </DialogsContext.Provider>
    );
};
