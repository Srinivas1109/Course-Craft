import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginTrainer.css";

const LoginTrainer = () => {
  const navigate = useNavigate();

  const onRegisterTextClick = useCallback(() => {
    navigate("/register-trainer");
  }, [navigate]);

  const onStudentTextClick = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  return (
    <div className="login-trainer">
      <div className="footer3">
        <div className="info3">
          <div className="info-child1" />
          <div className="coursecraft4">{`© 2023 CourseCraft `}</div>
          <div className="line-parent2">
            <div className="group-child32" />
            <div className="craft-your-skills3">
              Craft your skills, shape your future
            </div>
          </div>
        </div>
      </div>
      <div className="box-login-page2">
        <div className="group-parent4">
          <div className="rectangle-parent19">
            <div className="group-child33" />
            <img className="group-child34" alt="" src="/rectangle-792.svg" />
            <div className="login5">Login</div>
            <div className="register2" onClick={onRegisterTextClick}>
              Register
            </div>
          </div>
          <div className="welcome-to-coursecraft2">
            Welcome to CourseCraft.!
          </div>
        </div>
        <div className="group-parent5">
          <div className="rectangle-parent20">
            <div className="group-child35" />
            <div className="user-name2">USER-NAME</div>
            <div className="enter-your-user2">Enter your User name</div>
          </div>
          <div className="group-parent6">
            <div className="rectangle-parent21">
              <div className="group-child35" />
              <div className="password2">PASSWORD</div>
              <div className="enter-your-password2">Enter your Password</div>
            </div>
            <img className="invisible-1-icon2" alt="" src="/invisible-12.svg" />
          </div>
          <b className="login-to-continue">
            Login to continue your journey with us.
          </b>
        </div>
        <div className="rectangle-parent22">
          <div className="group-child37" />
          <div className="rememebr-me">Rememebr me</div>
          <div className="forgot-password2">Forgot Password ?</div>
        </div>
        <div className="rectangle-parent23">
          <div className="group-child38" />
          <div className="login6">Login</div>
        </div>
      </div>
      <img
        className="image-login-page-icon2"
        alt=""
        src="/image-login-page2.svg"
      />
      <img className="logo-icon3" alt="" src="/logo1@2x.png" />
      <img className="login-trainer-child" alt="" src="/arrow-1.svg" />
      <div className="student1" onClick={onStudentTextClick}>
        Student?
      </div>
    </div>
  );
};

export default LoginTrainer;
