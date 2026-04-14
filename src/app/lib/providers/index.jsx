'use client';
import AppDataProvider from "@/context/appContext";

const Providers = ({ children }) => {
    return (
       <AppDataProvider>
         {children}
       </AppDataProvider>
    );
};

export default Providers;