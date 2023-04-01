import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Design from "./pages/Design";
import LandingPage from "./pages/LandingPage";
import RegisterTrainer from "./pages/RegisterTrainer";
import RegisterStudent from "./pages/RegisterStudent";
import LoginTrainer from "./pages/LoginTrainer";
import LoginStudent from "./pages/LoginStudent";
import AboutUsAfterLogin from "./pages/AboutUsAfterLogin";
import AboutUsBeforeLogin from "./pages/AboutUsBeforeLogin";
import StudentHome from "./pages/StudentHome";
import RegisteredCoursecontent from "./pages/RegisteredCoursecontent";
import StudentCourse from "./pages/StudentCourse";
import CourseViewStud from "./pages/CourseViewStud";
import CoursecontentAdd from "./pages/CoursecontentAdd";
import CourseViewInst from "./pages/CourseViewInst";
import InstructorHome from "./pages/InstructorHome";
import InstructorCourse from "./pages/InstructorCourse";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/design":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/register-trainer":
        title = "";
        metaDescription = "";
        break;
      case "/register-student":
        title = "";
        metaDescription = "";
        break;
      case "/login-trainer":
        title = "";
        metaDescription = "";
        break;
      case "/login-student":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus-after-login":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus-before-login":
        title = "";
        metaDescription = "";
        break;
      case "/student-home":
        title = "";
        metaDescription = "";
        break;
      case "/registered-coursecontent":
        title = "";
        metaDescription = "";
        break;
      case "/student-course":
        title = "";
        metaDescription = "";
        break;
      case "/1-course-view-stud":
        title = "";
        metaDescription = "";
        break;
      case "/coursecontent-add":
        title = "";
        metaDescription = "";
        break;
      case "/1-course-view-inst":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-home":
        title = "";
        metaDescription = "";
        break;
      case "/instructor-course":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design" element={<Design />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register-trainer" element={<RegisterTrainer />} />
      <Route path="/register-student" element={<RegisterStudent />} />
      <Route path="/login-trainer" element={<LoginTrainer />} />
      <Route path="/login-student" element={<LoginStudent />} />
      <Route path="/aboutus-after-login" element={<AboutUsAfterLogin />} />
      <Route path="/aboutus-before-login" element={<AboutUsBeforeLogin />} />
      <Route path="/student-home" element={<StudentHome />} />
      <Route
        path="/registered-coursecontent"
        element={<RegisteredCoursecontent />}
      />
      <Route path="/student-course" element={<StudentCourse />} />
      <Route path="/1-course-view-stud" element={<CourseViewStud />} />
      <Route path="/coursecontent-add" element={<CoursecontentAdd />} />
      <Route path="/1-course-view-inst" element={<CourseViewInst />} />
      <Route path="/instructor-home" element={<InstructorHome />} />
      <Route path="/instructor-course" element={<InstructorCourse />} />
    </Routes>
  );
}
export default App;
