import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/asset";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const[allCourses , setAllCourses]=useState([]);
    const[isEducator , setIsEducator]=useState(true);

    //Fetch all courses
    const fetchAllCourses = async ()=>{
      setAllCourses(dummyCourses)
    }

    //function to calculate avg rating of course.
    const calculateRating = (course)=>{
      if(course.courseRatings.length ===0 ){
        return 0;
      }
        let totalRating = 0;
        course.courseRatings.forEach(rating =>{
          totalRating += rating.rating
        }
        )
        return totalRating/course.courseRatings.length
    }

    useEffect(()=>{
      fetchAllCourses()
    },[])

  const contextValue = {
    // Define any state or functions you want to provide to the context
    currency,allCourses,navigate,calculateRating,isEducator,setIsEducator

  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
