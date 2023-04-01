import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterTrainer.css";

const RegisterTrainer = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-trainer");
  }, [navigate]);

  const onStudentTextClick = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  return (
    <div className="register-trainer">
      <div className="footer1">
        <div className="info1">
          <div className="info-item" />
          <div className="coursecraft2">{`© 2023 CourseCraft `}</div>
          <div className="line-container">
            <div className="line-div" />
            <div className="craft-your-skills1">
              Craft your skills, shape your future
            </div>
          </div>
        </div>
        <img className="logo-icon1" alt="" src="/logo1@2x.png" />
      </div>
      <div className="box-login-page">
        <div className="welcome-to-coursecraft-wrapper">
          <div className="welcome-to-coursecraft">Welcome to CourseCraft.!</div>
        </div>
        <div className="rectangle-parent9">
          <div className="group-child19" />
          <div className="login1" onClick={onLoginTextClick}>
            Login
          </div>
          <img className="group-child20" alt="" src="/rectangle-79.svg" />
          <div className="register">Register</div>
        </div>
        <div className="group-container">
          <div className="rectangle-parent10">
            <div className="group-child21" />
            <div className="user-name">USER-NAME</div>
            <div className="enter-your-user">Enter your User name</div>
          </div>
          <div className="group-parent1">
            <div className="rectangle-parent11">
              <div className="group-child21" />
              <div className="password">PASSWORD</div>
              <div className="enter-your-password">Enter your Password</div>
            </div>
            <img className="invisible-1-icon" alt="" src="/invisible-1.svg" />
          </div>
          <div className="register-to-continue">
            Register to continue your journey with us.
          </div>
        </div>
        <div className="rectangle-parent12">
          <div className="group-child23" />
          <div className="remember-me">Remember me</div>
          <div className="forgot-password">Forgot Password ?</div>
        </div>
        <div className="rectangle-parent13">
          <div className="group-child24" />
          <div className="login2">Login</div>
        </div>
      </div>
      <img
        className="image-login-page-icon"
        alt=""
        src="/image-login-page.svg"
      />
      <img className="register-trainer-child" alt="" src="/arrow-1.svg" />
      <div className="student" onClick={onStudentTextClick}>
        Student?
      </div>
    </div>
  );
};

export default RegisterTrainer;
