import React from "react";  
import { Routes,Route, useLocation} from "react-router-dom";
import Home from "./pages/students/Home.jsx";
import CourseList from "./pages/students/CourseList.jsx";
import CourseDetails from "./pages/students/CourseDetails.jsx";
import MyEnrollment from "./pages/students/MyEnrollment.jsx";
import CoursePlayer from "./pages/students/CoursePlayer.jsx";
import Loading from "./components/students/Loading.jsx";
import Educator from "./pages/educators/Educator.jsx";
import Dashboard from "./pages/educators/Dashboard.jsx";
import StudentsEnrolled from "./pages/educators/StudentsEnrolled.jsx";
import MyCourses from "./pages/educators/MyCourses.jsx";
import AddCourse from "./pages/educators/AddCourse.jsx";
import Navbar from "./components/students/Navbar.jsx";
import "quill/dist/quill.snow.css";


const App = () => {
  const { pathname } = useLocation();
  const isEducatorRoute = pathname.startsWith("/educator"); // Check if the current route matches the educator routes 

  return (
    <div className="text-default min-h-scree bg-white">
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList/>}/>
        <Route path="/course-list/:input" element={<CourseList/>}/>
        <Route path="/course/:id" element={<CourseDetails/>}/>
        <Route path="/my-enrollments" element={<MyEnrollment/>}/>
        <Route path="/player/:courseID" element={<CoursePlayer/>}/>
        <Route path="loading/:path" element={<Loading/>}/>

        <Route path="/educator" element = {<Educator/>}>
            <Route path="/educator" element = {<Dashboard/>} />
            <Route path="student-enrolled" element = {<StudentsEnrolled/>} />
            <Route path="my-course" element = {<MyCourses/>} />
            <Route path="add-course" element = {<AddCourse/>} />

        </Route>
        

      </Routes>
    </div>
  );
}
export default App;