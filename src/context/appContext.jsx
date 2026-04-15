'use client';
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppDataProvider = ({ children }) => {

  const [friends, setFriends] = useState([]);  
  const [history, setHistory] = useState([]);  

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    };
    fetchFriends();
  }, []);

  const data = {
    friends,
    history,
    setHistory,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};

export default AppDataProvider;