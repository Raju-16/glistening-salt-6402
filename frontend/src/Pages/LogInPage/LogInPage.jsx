import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LogInPage.css";
import LogInSignUpNavbar from "../../Components/LogInSignUpNavbar/LogInSignUpNavbar";
import CancelIcon from "@mui/icons-material/Cancel";
import { LoginUser } from "../../Redux/UserReducer/userAction";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(LoginUser({ email, password }));
    }
  };

  return (
    <div className="loginpage">
      <LogInSignUpNavbar />
      <div className="login__all">
        <div className="login__left login__common__leftright">
          <p className="login__heading">Existing Customers</p>
          <form className="login__form" onSubmit={handleLogin}>
            <div>
              <label>* Email address</label>
              <div className="login__input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email.length > 0 && (
                  <CancelIcon
                    className="cancelIcon"
                    fontSize="small"
                    onClick={() => setEmail("")}
                  />
                )}
              </div>
            </div>
            <div>
              <label>* Password</label>
              <div className="login__input">
                {showPass ? (
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                ) : (
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                )}
                {showPass ? (
                  <p onClick={() => setShowPass(false)}>HIDE</p>
                ) : (
                  <p onClick={() => setShowPass(true)}>SHOW</p>
                )}
              </div>
            </div>
            <p className="forgot__password">Forgotten your password?</p>
            <button className="clicked__button">LOGIN TO YOUR ACCOUNT</button>
          </form>
          <p className="login__p">Or, Continue with</p>
          <div className="login__options">
            <div className="login__fg">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
                alt="facebook-logo"
              />
              <p>Facebook</p>
            </div>
            <div className="login__fg">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                alt="google-logo"
              />
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className="way__to__signup login__common__leftright">
          <p className="login__heading">New Customers</p>
          <button
            onClick={() => navigate("/signup")}
            className="clicked__button"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
