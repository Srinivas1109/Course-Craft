import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CoursecontentAdd.css";

const CoursecontentAdd = () => {
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
    <div className="coursecontent-add">
      <div className="footer11">
        <div className="class-technologies-inc5">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent14">
          <div className="group-child85" />
          <div className="group-child86" />
          <div className="careers6">Careers</div>
          <div className="privacy-policy5">Privacy Policy</div>
          <div className="terms-conditions5">{`Terms & Conditions`}</div>
        </div>
        <div className="info11">
          <div className="info-child9" />
          <div className="coursecraft12">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get7">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent15">
            <div className="group-child87" />
            <div className="craft-your-skills11">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent48">
            <div className="group-child88" />
            <div className="your-email7">Your Email</div>
            <div className="rectangle-parent49">
              <div className="group-child89" />
              <div className="group-child90" />
              <div className="subscribe7">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon11" alt="" src="/logo3@2x.png" />
      </div>
      <div className="coursecontent-add-child" />
      <div className="navbar7">
        <img className="image-1-icon7" alt="" src="/image-1@2x.png" />
        <div className="group-parent16">
          <div className="rectangle-parent50" onClick={onGroupContainer4Click}>
            <div className="group-child91" />
            <div className="log-out5">LOG-OUT</div>
          </div>
          <img className="image-13-icon4" alt="" src="/image-131@2x.png" />
          <div className="home8">Home</div>
          <div className="courses7">Courses</div>
          <div className="about-us7" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname5" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursecontentAdd;
