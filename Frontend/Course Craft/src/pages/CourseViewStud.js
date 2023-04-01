import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseViewStud.css";

const CourseViewStud = () => {
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
    <div className="course-view-stud">
      <div className="footer10">
        <div className="class-technologies-inc4">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent12">
          <div className="group-child78" />
          <div className="group-child79" />
          <div className="careers5">Careers</div>
          <div className="privacy-policy4">Privacy Policy</div>
          <div className="terms-conditions4">{`Terms & Conditions`}</div>
        </div>
        <div className="info10">
          <div className="info-child8" />
          <div className="coursecraft11">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get6">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent13">
            <div className="group-child80" />
            <div className="craft-your-skills10">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent45">
            <div className="group-child81" />
            <div className="your-email6">Your Email</div>
            <div className="rectangle-parent46">
              <div className="group-child82" />
              <div className="group-child83" />
              <div className="subscribe6">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon10" alt="" src="/logo3@2x.png" />
      </div>
      <div className="course-view-stud-child" />
      <div className="navbar6">
        <img className="image-1-icon6" alt="" src="/image-1@2x.png" />
        <div className="group-parent15">
          <div className="rectangle-parent47" onClick={onGroupContainer4Click}>
            <div className="group-child84" />
            <div className="log-out4">LOG-OUT</div>
          </div>
          <img className="image-13-icon3" alt="" src="/image-13@2x.png" />
          <div className="home7">Home</div>
          <div className="courses6">Courses</div>
          <div className="about-us6" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname4" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewStud;
