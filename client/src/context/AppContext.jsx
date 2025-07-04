import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/asset";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const[allCourses , setAllCourses]=useState([]);

    //Fetch all courses
    const fetchAllCourses = async ()=>{
      setAllCourses(dummyCourses)
    }

    useEffect(()=>{
      fetchAllCourses()
    },[])

  const contextValue = {
    // Define any state or functions you want to provide to the context
    currency,allCourses,navigate,

  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
