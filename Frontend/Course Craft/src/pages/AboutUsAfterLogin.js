import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUsAfterLogin.css";

const AboutUsAfterLogin = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  const onUsrnameTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  return (
    <div className="about-us-after-login">
      <div className="top">
        <img className="frame-icon" alt="" src="/frame.svg" />
        <div className="div4">
          <div className="div5">
            <div className="div6">
              <div className="course-craft-is-an">
                COURSE-CRAFT IS AN ONLINE LEARNING PLATFORM THAT PROVIDES A WIDE
                RANGE OF COURSES TO HELP INDIVIDUALS LEARN NEW SKILLS , PERSUE
                THEIR PASSIONS AND ACHIEVE THEIR GOALS
              </div>
              <div className="your-future-starts">YOUR FUTURE STARTS HERE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer5">
        <div className="info5">
          <div className="info-child3" />
          <div className="coursecraft6">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get1">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent4">
            <div className="group-child46" />
            <div className="craft-your-skills5">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent29">
            <div className="group-child47" />
            <div className="your-email1">Your Email</div>
            <div className="rectangle-parent30">
              <div className="group-child48" />
              <div className="group-child49" />
              <div className="subscribe1">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon5" alt="" src="/logo2@2x.png" />
      </div>
      <div className="mid-1">
        <div className="mid-1-child" />
        <div className="who-is-behind">Who is behind Course-craft?</div>
        <div className="course-craft-is-a">
          Course-craft is a team of passionate educators and professionals who
          have come together to create an online platform that makes learning
          easy, accessible, and enjoyable for everyone.
        </div>
      </div>
      <div className="mid-3">
        <div className="mid-3-child" />
        <div className="course-craft-offers-a">
          Course-craft offers a wide range of courses in various fields such as
          business, medical, data science, and machine learning . Our courses
          are designed to cater to learners of all levels, from beginners to
          advanced.
        </div>
        <div className="what-type-of-container">
          <span className="what-type-of-container1">
            <p className="what-type-of">
              What type of courses does Course-craft offer?
            </p>
            <p className="what-type-of">&nbsp;</p>
            <p className="what-type-of">&nbsp;</p>
          </span>
        </div>
      </div>
      <div className="mid-2">
        <div className="what-makes-course-craft-container">
          <span className="what-type-of-container1">
            <p className="what-type-of">
              What makes Course-craft different from other online learning
              platforms?
            </p>
            <p className="what-type-of">&nbsp;</p>
            <p className="what-type-of">&nbsp;</p>
          </span>
        </div>
        <div className="it-is-different">
          It is different from other online learning platforms because our
          courses are created by experienced instructors who are experts in
          their fields. They use a variety of engaging teaching methods to help
          you learn at your own pace and retain information effectively.
        </div>
      </div>
      <div className="mid-4">
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <div className="reach-out-to-container">
          <span className="what-type-of-container1">
            <p className="what-type-of">{`REACH OUT TO US `}</p>
            <p className="what-type-of">&nbsp;</p>
            <p className="what-type-of"> 6969@gmail.com</p>
            <p className="what-type-of">&nbsp;</p>
            <p className="what-type-of">{`           +91 6969696969 `}</p>
          </span>
        </div>
        <div className="for-more-information-container">
          <span className="what-type-of-container1">
            <p className="what-type-of">{`For more Information `}</p>
            <p className="what-type-of">&nbsp;</p>
            <p className="what-type-of">&nbsp;</p>
            <p className="what-type-of">{`    `}</p>
          </span>
        </div>
      </div>
      <div className="navbar1">
        <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
        <div className="group-parent10">
          <div className="rectangle-parent31" onClick={onGroupContainer3Click}>
            <div className="group-child50" />
            <div className="log-out">LOG-OUT</div>
          </div>
          <div className="home2">Home</div>
          <div className="courses1">Courses</div>
          <div className="about-us1" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
      <img className="image-12-icon" alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default AboutUsAfterLogin;
