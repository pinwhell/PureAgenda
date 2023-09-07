import { useState } from 'react';

type UpdateObject<T> = (updater: ((prevObj: T) => T) | T) => void;

export function useStatePersist<T>(
  persistName: string,
  defaultVal: T
): [T, UpdateObject<T>] {
  const [obj, setObj] = useState<T>(() => {
    const obj = localStorage.getItem(persistName);
    return obj === null ? defaultVal : JSON.parse(obj);
  });

  const updateObj: UpdateObject<T> = (updater) => {
    setObj((prevObj: T) => {
      const newObj =
        typeof updater === 'function'
          ? (updater as CallableFunction)(prevObj)
          : updater;
      localStorage.setItem(persistName, JSON.stringify(newObj));
      return newObj;
    });
  };

  return [obj, updateObj];
}
