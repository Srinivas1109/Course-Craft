import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStudent.css";

const LoginStudent = () => {
  const navigate = useNavigate();

  const onRegisterTextClick = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/student-home");
  }, [navigate]);

  const onTrainerTextClick = useCallback(() => {
    navigate("/login-trainer");
  }, [navigate]);

  return (
    <div className="login-student">
      <div className="footer4">
        <div className="info4">
          <div className="info-child2" />
          <div className="coursecraft5">{`© 2023 CourseCraft `}</div>
          <div className="line-parent3">
            <div className="group-child39" />
            <div className="craft-your-skills4">
              Craft your skills, shape your future
            </div>
          </div>
        </div>
      </div>
      <div className="box-login-page3">
        <div className="group-parent7">
          <div className="rectangle-parent24">
            <div className="group-child40" />
            <img className="group-child41" alt="" src="/rectangle-793.svg" />
            <div className="login7">Login</div>
            <div className="register3" onClick={onRegisterTextClick}>
              Register
            </div>
          </div>
          <div className="welcome-to-coursecraft3">
            Welcome to CourseCraft.!
          </div>
        </div>
        <div className="group-parent8">
          <div className="rectangle-parent25">
            <div className="group-child42" />
            <div className="user-name3">USER-NAME</div>
            {/* <div className="enter-your-user3">Enter your User name</div> */}
            <input
                className="enter-your-user3"
                placeholder="Enter your Username"
              />
          </div>
          <div className="group-parent9">
            <div className="rectangle-parent26">
              <div className="group-child42" />
              <div className="password3">PASSWORD</div>
              <input
                className="enter-your-password3"
                placeholder="Enter your Password"
              />
            </div>
            <img className="invisible-1-icon3" alt="" src="/invisible-13.svg" />
          </div>
          <b className="login-to-continue1">
            Login to continue your journey with us.
          </b>
        </div>

        <div className="rectangle-parent28" onClick={onGroupContainer8Click}>
          <div className="group-child45" />
          <div className="login8">Login</div>
        </div>
      </div>
      <img
        className="image-login-page-icon3"
        alt=""
        src="/image-login-page3.svg"
      />
      <img className="logo-icon4" alt="" src="/logo1@2x.png" />
      <img className="login-student-child" alt="" src="/arrow-11.svg" />
      <div className="trainer1" onClick={onTrainerTextClick}>
        Trainer?
      </div>
    </div>
  );
};

export default LoginStudent;
