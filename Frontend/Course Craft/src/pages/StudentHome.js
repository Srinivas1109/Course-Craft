import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentHome.css";

const StudentHome = () => {
  const navigate = useNavigate();

  const onEnrollContainerClick = useCallback(() => {
    navigate("/student-course");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCoursesTextClick = useCallback(() => {
    navigate("/student-course");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  const onUsrnameTextClick = useCallback(() => {
    navigate("/aboutus-before-login");
  }, [navigate]);

  return (
    <div className="student-home">
      <div className="footer7">
        <div className="class-technologies-inc1">{`© 2021 Class Technologies Inc. `}</div>
        <div className="line-parent6">
          <div className="group-child57" />
          <div className="group-child58" />
          <div className="careers2">Careers</div>
          <div className="privacy-policy1">Privacy Policy</div>
          <div className="terms-conditions1">{`Terms & Conditions`}</div>
        </div>
        <div className="info7">
          <div className="info-child5" />
          <div className="coursecraft8">{`© 2023 CourseCraft `}</div>
          <div className="subscribe-to-get3">
            Subscribe to get our Newsletter
          </div>
          <div className="line-parent7">
            <div className="group-child59" />
            <div className="craft-your-skills7">
              Craft your skills, shape your future
            </div>
          </div>
          <div className="rectangle-parent36">
            <div className="group-child60" />
            <div className="your-email3">Your Email</div>
            <div className="rectangle-parent37">
              <div className="group-child61" />
              <div className="group-child62" />
              <div className="subscribe3">Subscribe</div>
            </div>
          </div>
        </div>
        <img className="logo-icon7" alt="" src="/logo3@2x.png" />
      </div>
      <img className="home-pic-icon1" alt="" src="/home-pic1.svg" />
      <img className="image-14-icon" alt="" src="/image-14@2x.png" />
      <div className="appeal1">
        So why wait? Start learning today and unlock your full potential with
        Course-Craft!
      </div>
      <img className="image-16-icon" alt="" src="/image-16@2x.png" />
      <div className="enroll" onClick={onEnrollContainerClick}>
        <div className="enroll-child" />
        <b className="enroll-now">Enroll now</b>
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
      </div>
      <div className="student-home-child" />
      <div className="reviews">
        <div className="image-17-parent">
          <img className="image-17-icon" alt="" src="/image-17@2x.png" />
          <b className="k-reviews">
            <p className="k">{`4.0 `}</p>
            <p className="enrollments">10k reviews</p>
          </b>
        </div>
        <b className="k-enrollments">
          <p className="k">25k</p>
          <p className="enrollments">Enrollments</p>
        </b>
        <b className="k-students">
          <p className="k">100k+</p>
          <p className="enrollments">students</p>
        </b>
        <b className="k-instructors">
          <p className="k">1k+</p>
          <p className="enrollments">instructors</p>
        </b>
      </div>
      <div className="student-home-item" />
      <div className="popular-courses">POPULAR COURSES</div>
      <div className="course2">
        <div className="course2-child" />
        <div className="reviews1">4.9 ★(900 reviews)</div>
        <div className="div10">🕑3:50:00</div>
        <div className="introduction-to-data">
          Introduction to Data Science Specialization
        </div>
        <div className="enroll1">
          <div className="enroll-item" />
          <b className="view-course">View Course</b>
          <img className="image-15-icon1" alt="" src="/image-151@2x.png" />
        </div>
      </div>
      <div className="course3">
        <div className="course2-child" />
        <img className="course3-item" alt="" src="/rectangle-207@2x.png" />
        <div className="reviews1">4.6 ★(500 reviews)</div>
        <div className="div10">🕑5:30:00</div>
        <div className="introduction-to-blockchain">
          Introduction to Blockchain Technologies
        </div>
        <div className="enroll1">
          <div className="enroll-item" />
          <b className="view-course">View Course</b>
          <img className="image-15-icon1" alt="" src="/image-151@2x.png" />
        </div>
      </div>
      <div className="course1">
        <div className="course2-child" />
        <img className="course3-item" alt="" src="/rectangle-2071@2x.png" />
        <img className="course1-inner" alt="" src="/rectangle-208@2x.png" />
        <div className="reviews1">4.2 ★(230 reviews)</div>
        <div className="div10">🕑1:30:00</div>
        <div className="introduction-to-data">
          Introduction to Web Development with HTML, CSS, JavaScript
        </div>
        <div className="enroll1">
          <div className="enroll-item" />
          <b className="view-course">View Course</b>
          <img className="image-15-icon1" alt="" src="/image-151@2x.png" />
        </div>
      </div>
      <img className="image-19-icon" alt="" src="/image-19@2x.png" />
      <div className="student-home-inner" />
      <div className="navbar3">
        <img
          className="image-1-icon3"
          alt=""
          src="/image-1@2x.png"
          data-scroll-to="image1"
        />
        <div className="group-parent12">
          <div className="rectangle-parent38" onClick={onGroupContainer5Click}>
            <div className="group-child63" />
            <div className="log-out1">LOG-OUT</div>
          </div>
          <img className="image-13-icon" alt="" src="/image-13@2x.png" />
          <div className="home4" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="courses3" onClick={onCoursesTextClick}>
            Courses
          </div>
          <div className="about-us3" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="usrname1" onClick={onUsrnameTextClick}>
            @usrname
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
