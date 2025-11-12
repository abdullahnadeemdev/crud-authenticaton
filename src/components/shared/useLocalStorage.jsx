import React, { useEffect, useState } from "react";

const StoredValue = (key, defaultValue) => {
  const savedData = localStorage.getItem(key);
  const initial = JSON.parse(savedData);
  return initial || defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return StoredValue(key, defaultValue);
  });
};

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

export { useLocalStorage };
