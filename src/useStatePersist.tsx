import { useState } from 'react';

export function useStatePersist<T>(persistName: string, defaultVal: T) {
    const [obj, setObj] = useState(() => {
        const obj = localStorage.getItem(persistName);
        return obj === null ? defaultVal : JSON.parse(obj);
    });

    const updateObj = (updater: ((prevObj: T) => T) | T) => {
        setObj((prevObj: T) => {
        const newObj = typeof updater === 'function' ? updater(prevObj) : updater;
        localStorage.setItem(persistName, JSON.stringify(newObj));
        return newObj;
        });
    };

    return [obj, updateObj];
}