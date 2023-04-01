import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstructorCourse.css";

const InstructorCourse = () => {
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
    <div className="instructor-course">
      <div className="footer14">
        <div className="class-technologies-inc8">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent20">
          <div className="group-child106" />
          <div className="group-child107" />
          <div className="careers9">Careers</div>
          <div className="privacy-policy8">Privacy Policy</div>
          <div className="terms-conditions8">{`Terms & Conditions`}</div>
        </div>
        <div className="info14">
          <div className="info-child12" />
          <div className="coursecraft15">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get10">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent21">
            <div className="group-child108" />
            <div className="craft-your-skills14">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent57">
            <div className="group-child109" />
            <div className="your-email10">Your Email</div>
            <div className="rectangle-parent58">
              <div className="group-child110" />
              <div className="group-child111" />
              <div className="subscribe10">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon14" alt="" src="/logo3@2x.png" />
      </div>
      <div className="instructor-course-child" />
      <div className="navbar10">
        <img className="image-1-icon10" alt="" src="/image-1@2x.png" />
        <div className="group-parent19">
          <div className="rectangle-parent59" onClick={onGroupContainer4Click}>
            <div className="group-child112" />
            <div className="log-out8">LOG-OUT</div>
          </div>
          <img className="image-13-icon7" alt="" src="/image-131@2x.png" />
          <div className="home11">Home</div>
          <div className="courses10">Courses</div>
          <div className="about-us10" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname8" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourse;
