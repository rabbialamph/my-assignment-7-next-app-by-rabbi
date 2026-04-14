'use client';
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppDataProvider = ({children}) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchApps = async () => { 
        const res = await fetch("/friends.json");
        const data = await res.json();
        setApps(data);
        setLoading(false);
      }
    fetchApps();
  }, []);


  const data = {
    apps,
    setApps,
    loading
  };

    return (
        <AppContext.Provider value={ data }>
            {children}
        </AppContext.Provider>
    );
};

export default AppDataProvider;