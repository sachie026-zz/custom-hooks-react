import React, { useState, useCallback } from "react";

const useLocalstorageHook = (initial) => {
  const [storageData, setStorageData] = useState(initial);

  const saveData = (key, value) => {
    if (!storageData) {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, [...storageData.split(","), value]);
    }
  };

  const getData = useCallback(async (key) => {
    const data = await localStorage.getItem(key);
    setStorageData(data);
    return data;
  }, []);

  return [getData, saveData];
};

export default useLocalstorageHook;
