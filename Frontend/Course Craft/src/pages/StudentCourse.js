import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentCourse.css";

const StudentCourse = () => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  const onUsrnameTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  return (
    <div className="student-course">
      <div className="footer9">
        <div className="class-technologies-inc3">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent10">
          <div className="group-child71" />
          <div className="group-child72" />
          <div className="careers4">Careers</div>
          <div className="privacy-policy3">Privacy Policy</div>
          <div className="terms-conditions3">{`Terms & Conditions`}</div>
        </div>
        <div className="info9">
          <div className="info-child7" />
          <div className="coursecraft10">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get5">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent11">
            <div className="group-child73" />
            <div className="craft-your-skills9">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent42">
            <div className="group-child74" />
            <div className="your-email5">Your Email</div>
            <div className="rectangle-parent43">
              <div className="group-child75" />
              <div className="group-child76" />
              <div className="subscribe5">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon9" alt="" src="/logo3@2x.png" />
      </div>
      <div className="student-course-child" />
      <div className="navbar5">
        <img className="image-1-icon5" alt="" src="/image-1@2x.png" />
        <div className="group-parent14">
          <div className="rectangle-parent44" onClick={onGroupContainer4Click}>
            <div className="group-child77" />
            <div className="log-out3">LOG-OUT</div>
          </div>
          <img className="image-13-icon2" alt="" src="/image-13@2x.png" />
          <div className="home6">Home</div>
          <div className="courses5">Courses</div>
          <div className="about-us5" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname3" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
      <div className="li">LI</div>
    </div>
  );
};

export default StudentCourse;
