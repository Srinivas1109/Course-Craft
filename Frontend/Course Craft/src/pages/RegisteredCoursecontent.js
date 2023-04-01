import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisteredCoursecontent.css";

const RegisteredCoursecontent = () => {
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
    <div className="registered-coursecontent">
      <div className="footer8">
        <div className="class-technologies-inc2">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent8">
          <div className="group-child64" />
          <div className="group-child65" />
          <div className="careers3">Careers</div>
          <div className="privacy-policy2">Privacy Policy</div>
          <div className="terms-conditions2">{`Terms & Conditions`}</div>
        </div>
        <div className="info8">
          <div className="info-child6" />
          <div className="coursecraft9">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get4">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent9">
            <div className="group-child66" />
            <div className="craft-your-skills8">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent39">
            <div className="group-child67" />
            <div className="your-email4">Your Email</div>
            <div className="rectangle-parent40">
              <div className="group-child68" />
              <div className="group-child69" />
              <div className="subscribe4">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon8" alt="" src="/logo3@2x.png" />
      </div>
      <div className="registered-coursecontent-child" />
      <div className="navbar4">
        <img className="image-1-icon4" alt="" src="/image-1@2x.png" />
        <div className="group-parent13">
          <div className="rectangle-parent41" onClick={onGroupContainer4Click}>
            <div className="group-child70" />
            <div className="log-out2">LOG-OUT</div>
          </div>
          <img className="image-13-icon1" alt="" src="/image-13@2x.png" />
          <div className="home5">Home</div>
          <div className="courses4">Courses</div>
          <div className="about-us4" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname2" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCoursecontent;
