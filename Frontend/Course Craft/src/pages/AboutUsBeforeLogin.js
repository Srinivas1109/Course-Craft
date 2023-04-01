import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUsBeforeLogin.css";

const AboutUsBeforeLogin = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  return (
    <div className="about-us-before-login">
      <div className="top1">
        <img className="frame-icon1" alt="" src="/frame1.svg" />
        <div className="div7">
          <div className="div8">
            <div className="div9">
              <div className="course-craft-is-an1">
                COURSE-CRAFT IS AN ONLINE LEARNING PLATFORM THAT PROVIDES A WIDE
                RANGE OF COURSES TO HELP INDIVIDUALS LEARN NEW SKILLS , PERSUE
                THEIR PASSIONS AND ACHIEVE THEIR GOALS
              </div>
              <div className="your-future-starts1">YOUR FUTURE STARTS HERE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer6">
        <div className="info6">
          <div className="info-child4" />
          <div className="coursecraft7">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get2">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent5">
            <div className="group-child51" />
            <div className="craft-your-skills6">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent32">
            <div className="group-child52" />
            <div className="your-email2">Your Email</div>
            <div className="rectangle-parent33">
              <div className="group-child53" />
              <div className="group-child54" />
              <div className="subscribe2">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon6" alt="" src="/logo2@2x.png" />
      </div>
      <div className="mid-11">
        <div className="mid-1-item" />
        <div className="who-is-behind1">Who is behind Course-craft?</div>
        <div className="course-craft-is-a1">
          Course-craft is a team of passionate educators and professionals who
          have come together to create an online platform that makes learning
          easy, accessible, and enjoyable for everyone.
        </div>
      </div>
      <div className="mid-31">
        <div className="mid-3-item" />
        <div className="course-craft-offers-a1">
          Course-craft offers a wide range of courses in various fields such as
          business, medical, data science, and machine learning . Our courses
          are designed to cater to learners of all levels, from beginners to
          advanced.
        </div>
        <div className="what-type-of-container2">
          <span className="what-type-of-container3">
            <p className="what-type-of1">
              What type of courses does Course-craft offer?
            </p>
            <p className="what-type-of1">&nbsp;</p>
            <p className="what-type-of1">&nbsp;</p>
          </span>
        </div>
      </div>
      <div className="mid-21">
        <div className="what-makes-course-craft-container2">
          <span className="what-type-of-container3">
            <p className="what-type-of1">
              What makes Course-craft different from other online learning
              platforms?
            </p>
            <p className="what-type-of1">&nbsp;</p>
            <p className="what-type-of1">&nbsp;</p>
          </span>
        </div>
        <div className="it-is-different1">
          It is different from other online learning platforms because our
          courses are created by experienced instructors who are experts in
          their fields. They use a variety of engaging teaching methods to help
          you learn at your own pace and retain information effectively.
        </div>
      </div>
      <div className="mid-41">
        <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
        <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
        <div className="reach-out-to-container2">
          <span className="what-type-of-container3">
            <p className="what-type-of1">{`REACH OUT TO US `}</p>
            <p className="what-type-of1">&nbsp;</p>
            <p className="what-type-of1"> 6969@gmail.com</p>
            <p className="what-type-of1">&nbsp;</p>
            <p className="what-type-of1">{`           +91 6969696969 `}</p>
          </span>
        </div>
        <div className="for-more-information-container2">
          <span className="what-type-of-container3">
            <p className="what-type-of1">{`For more Information `}</p>
            <p className="what-type-of1">&nbsp;</p>
            <p className="what-type-of1">&nbsp;</p>
            <p className="what-type-of1">{`    `}</p>
          </span>
        </div>
      </div>
      <div className="about-us-before-login-child" />
      <div className="navbar2">
        <img className="image-1-icon2" alt="" src="/image-11@2x.png" />
        <div className="group-parent11">
          <div className="rectangle-parent34" onClick={onGroupContainer3Click}>
            <div className="group-child55" />
            <div className="login9">LOGIN</div>
          </div>
          <div className="rectangle-parent35" onClick={onGroupContainer4Click}>
            <div className="group-child55" />
            <div className="sign-up1">SIGN-UP</div>
          </div>
          <div className="home3">Home</div>
          <div className="careers1">Careers</div>
          <div className="courses2">Courses</div>
          <div className="about-us2" onClick={onAboutUsTextClick}>
            About Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBeforeLogin;
