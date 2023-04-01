import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseViewInst.css";

const CourseViewInst = () => {
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
    <div className="course-view-inst">
      <div className="footer12">
        <div className="class-technologies-inc6">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent16">
          <div className="group-child92" />
          <div className="group-child93" />
          <div className="careers7">Careers</div>
          <div className="privacy-policy6">Privacy Policy</div>
          <div className="terms-conditions6">{`Terms & Conditions`}</div>
        </div>
        <div className="info12">
          <div className="info-child10" />
          <div className="coursecraft13">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get8">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent17">
            <div className="group-child94" />
            <div className="craft-your-skills12">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent51">
            <div className="group-child95" />
            <div className="your-email8">Your Email</div>
            <div className="rectangle-parent52">
              <div className="group-child96" />
              <div className="group-child97" />
              <div className="subscribe8">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon12" alt="" src="/logo3@2x.png" />
      </div>
      <div className="course-view-inst-child" />
      <div className="navbar8">
        <img className="image-1-icon8" alt="" src="/image-1@2x.png" />
        <div className="group-parent17">
          <div className="rectangle-parent53" onClick={onGroupContainer4Click}>
            <div className="group-child98" />
            <div className="log-out6">LOG-OUT</div>
          </div>
          <img className="image-13-icon5" alt="" src="/image-131@2x.png" />
          <div className="home9">Home</div>
          <div className="courses8">Courses</div>
          <div className="about-us8" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname6" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewInst;
