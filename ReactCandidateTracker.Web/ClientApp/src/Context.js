import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

const ContextComponent = ({ children }) => {
    const [refusedCount, setRefusedCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);


    const updateRefusedCount = async () => {
        const { data } = await axios.get('/api/candidate/getrefused');
        setRefusedCount(data.length);
    }

    const updateConfirmedCount = async () => {
        const { data } = await axios.get('/api/candidate/getconfirmed');
        setConfirmedCount(data.length);
    }

    const updatePendingCount = async () => {
        const { data } = await axios.get('/api/candidate/getpending');
        setPendingCount(data.length);
    }

    useEffect(() => {
        updateRefusedCount();
        updateConfirmedCount();
        updatePendingCount();
    }, []);

    return (
        <Context.Provider value={{ refusedCount, updateRefusedCount,confirmedCount, updateConfirmedCount, pendingCount, updatePendingCount }}>
            {children}
        </Context.Provider>
    )
}

const useCount = () => {
    return useContext(Context);
}
export { ContextComponent, useCount };