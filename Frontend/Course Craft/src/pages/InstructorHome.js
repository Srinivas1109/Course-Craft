import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstructorHome.css";

const InstructorHome = () => {
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
    <div className="instructor-home">
      <div className="footer13">
        <div className="class-technologies-inc7">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent18">
          <div className="group-child99" />
          <div className="group-child100" />
          <div className="careers8">Careers</div>
          <div className="privacy-policy7">Privacy Policy</div>
          <div className="terms-conditions7">{`Terms & Conditions`}</div>
        </div>
        <div className="info13">
          <div className="info-child11" />
          <div className="coursecraft14">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get9">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent19">
            <div className="group-child101" />
            <div className="craft-your-skills13">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent54">
            <div className="group-child102" />
            <div className="your-email9">Your Email</div>
            <div className="rectangle-parent55">
              <div className="group-child103" />
              <div className="group-child104" />
              <div className="subscribe9">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon13" alt="" src="/logo3@2x.png" />
      </div>
      <div className="instructor-home-child" />
      <div className="navbar9">
        <img className="image-1-icon9" alt="" src="/image-1@2x.png" />
        <div className="group-parent18">
          <div className="rectangle-parent56" onClick={onGroupContainer4Click}>
            <div className="group-child105" />
            <div className="log-out7">LOG-OUT</div>
          </div>
          <img className="image-13-icon6" alt="" src="/image-131@2x.png" />
          <div className="home10">Home</div>
          <div className="courses9">Courses</div>
          <div className="about-us9" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname7" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
