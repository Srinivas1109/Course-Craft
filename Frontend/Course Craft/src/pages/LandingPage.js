import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbarContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/login-trainer");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="footer">
        <div className="class-technologies-inc">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent">
          <div className="group-child" />
          <div className="group-item" />
          <div className="careers">Careers</div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-conditions">{`Terms & Conditions`}</div>
        </div>
        <div className="info">
          <div className="info-child" />
          <div className="coursecraft">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get">
            Subscribe to get our Newsletter
          </div>
          <div className="line-group">
            <div className="group-inner" />
            <div className="craft-your-skills">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="rectangle-div" />
            <div className="your-email">Your Email</div>
            <div className="rectangle-group" onClick={onGroupContainer2Click}>
              <div className="group-child1" />
              <div className="group-child2" />
              <div className="subscribe">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon" alt="" src="/logo@2x.png" />
      </div>
      <div className="what-is-totc">
        <div className="coursecraft-is-a">
          CourseCraft is a platform that allows educators to create courses
          whereby they can store the course materials online provide students
          with feedback all in one place.
        </div>
        <div className="what-is-coursecraft-container">
          <span>{`What is `}</span>
          <span className="coursecraft1">CourseCraft?</span>
        </div>
        <div className="rectangle-container">
          <img className="rectangle-icon" alt="" src="/rectangle-19@2x.png" />
          <img className="group-child3" alt="" src="/rectangle-22.svg" />
        </div>
        <div className="group-div">
          <div className="group-child4" />
          <img className="group-child5" alt="" src="/rectangle-21@2x.png" />
          <div className="group-child6" />
          <div className="rectangle-parent1" onClick={onGroupContainer5Click}>
            <div className="group-child7" />
            <div className="explore-courses">Explore courses</div>
          </div>
        </div>
        <div className="for-instructors">FOR INSTRUCTORS</div>
        <div className="for-students">FOR STUDENTS</div>
        <div className="rectangle-parent2" onClick={onGroupContainer7Click}>
          <div className="group-child7" />
          <div className="explore-courses">{`Create a course `}</div>
        </div>
      </div>
      <img className="home-pic-icon" alt="" src="/home-pic.svg" />
      <div className="appeal">
        So why wait? Start learning today and unlock your full potential with
        Course-Craft!
      </div>
      <div className="left-box">
        <div className="rectangle-parent3">
          <div className="group-child9" />
          <img className="group-child10" alt="" src="/rectangle-88.svg" />
          <div className="empower-yourself-with">
            Empower yourself with personalized learning at its best.
          </div>
          <div className="div"></div>
        </div>
        <div className="rectangle-parent4">
          <div className="group-child9" />
          <img className="group-child10" alt="" src="/rectangle-88.svg" />
          <div className="upgrade-your-skills">
            Upgrade your skills and take charge of your learning journey.
          </div>
          <div className="div"></div>
        </div>
        <div className="rectangle-parent5">
          <div className="group-child9" />
          <img className="group-child14" alt="" src="/rectangle-881.svg" />
          <div className="join-a-community">
            Join a community of learners and explore new horizons.
          </div>
          <div className="div2"></div>
        </div>
        <div className="rectangle-parent6">
          <div className="group-child9" />
          <img className="group-child14" alt="" src="/rectangle-881.svg" />
          <div className="discover-a-world">
            Discover a world of knowledge at your fingertips
          </div>
          <div className="div2"></div>
        </div>
      </div>
      <div className="landing-page-child" />
      <div className="navbar" data-scroll-to="navbarContainer">
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <div className="group-parent">
          <div className="rectangle-parent7" onClick={onGroupContainer12Click}>
            <div className="group-child17" />
            <div className="login">LOGIN</div>
          </div>
          <div className="rectangle-parent8" onClick={onGroupContainer13Click}>
            <div className="group-child17" />
            <div className="sign-up">SIGN-UP</div>
          </div>
          <div className="home1">Home</div>
          <div className="courses">Courses</div>
          <div className="about-us" onClick={onAboutUsTextClick}>
            About Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
