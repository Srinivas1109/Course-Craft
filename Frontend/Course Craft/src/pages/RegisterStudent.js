import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterStudent.css";

const RegisterStudent = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  const onTrainerTextClick = useCallback(() => {
    navigate("/register-trainer");
  }, [navigate]);

  return (
    <div className="register-student">
      <div className="footer2">
        <div className="info2">
          <div className="info-inner" />
          <div className="coursecraft3">{`© 2023 CourseCraft `}</div>
          <div className="line-parent1">
            <div className="group-child25" />
            <div className="craft-your-skills2">
              Craft your skills, shape your future
            </div>
          </div>
        </div>
        <img className="logo-icon2" alt="" src="/logo1@2x.png" />
      </div>
      <div className="box-login-page1">
        <div className="welcome-to-coursecraft-container">
          <div className="welcome-to-coursecraft1">
            Welcome to CourseCraft.!
          </div>
        </div>
        <div className="rectangle-parent14">
          <div className="group-child26" />
          <div className="login3" onClick={onLoginTextClick}>
            Login
          </div>
          <img className="group-child27" alt="" src="/rectangle-791.svg" />
          <div className="register1">Register</div>
        </div>
        <div className="group-parent2">
          <div className="rectangle-parent15">
            <div className="group-child28" />
            <div className="user-name1">USER-NAME</div>
            <input className="enter-your-user1" placeholder="Enter your User name"/>
          </div>
          <div className="group-parent3">
            <div className="rectangle-parent16">
              <div className="group-child28" />
              <div className="password1">PASSWORD</div>
              <div className="enter-your-password1">Enter your Password</div>
            </div>
            <img className="invisible-1-icon1" alt="" src="/invisible-11.svg" />
          </div>
          <div className="register-to-continue1">
            Register to continue your journey with us.
          </div>
        </div>
        <div className="rectangle-parent17">
          <div className="group-child30" />
          <div className="remember-me1">Remember me</div>
          <div className="forgot-password1">Forgot Password ?</div>
        </div>
        <div className="rectangle-parent18">
          <div className="group-child31" onClick={onRectangle6Click} />
          <div className="login4">Login</div>
        </div>
      </div>
      <img
        className="image-login-page-icon1"
        alt=""
        src="/image-login-page1.svg"
      />
      <img className="register-student-child" alt="" src="/arrow-11.svg" />
      <div className="trainer" onClick={onTrainerTextClick}>
        Trainer?
      </div>
    </div>
  );
};

export default RegisterStudent;
