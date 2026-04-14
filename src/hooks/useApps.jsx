
import { AppContext } from "@/context/appContext";
import { useContext } from "react";


export const useApps = () => {
  return useContext(AppContext);
};