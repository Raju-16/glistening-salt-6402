import React, { useReducer, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogInSignUpNavbar from "../../Components/LogInSignUpNavbar/LogInSignUpNavbar";
import "./SignUpPage.css";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { SignupUser } from "../../Redux/UserReducer/userAction";
import { USER_SIGNUP_SUCCESS } from "../../Redux/UserReducer/userActionTypes";

const initialState = {
  fullname: "",
  email: "",
  emailcheck: "",
  password: "",
  passwordcheck: "",
  mobile: "",
  refcode: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "fullname":
      return {
        ...state,
        fullname: payload,
      };
    case "email":
      return {
        ...state,
        email: payload,
      };
    case "emailcheck":
      return {
        ...state,
        emailcheck: payload,
      };
    case "password":
      return {
        ...state,
        password: payload,
      };
    case "passwordcheck":
      return {
        ...state,
        passwordcheck: payload,
      };
    case "mobile":
      return {
        ...state,
        mobile: payload,
      };
    case "refcode":
      return {
        ...state,
        refcode: payload,
      };

    default:
      return state;
  }
};

const SignUpPage = () => {
  const [state, setter] = useReducer(reducer, initialState);
  const [showPass, setShowPass] = useState(false);
  const [showPassCheck, setShowPassCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [visitedInput, setVisitedInput] = useState([]);

  // const handleVisit = (value) => {
  //   const newVisitedInput = visitedInput;
  //   if (!newVisitedInput.includes(value)) {
  //     newVisitedInput.push(value);
  //   }
  //   setVisitedInput(newVisitedInput);
  //   console.log(visitedInput);
  // };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(SignupUser(state));
    // .then((r) => {
    //   if (r.type === USER_SIGNUP_SUCCESS) {
    //     navigate("/");
    //   }
    // });
  };

  return (
    <div className="signuppage">
      <LogInSignUpNavbar />
      <div className="signup__all">
        <p className="signup__heading">About You</p>
        <div className="signup__head">
          <p className="signup__p">Sign Up With</p>
          <div className="signup__options">
            <div className="signup__fg">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
                alt="facebook-logo"
              />
              <p>Facebook</p>
            </div>
            <div className="signup__fg">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                alt="google-logo"
              />
              <p>Google</p>
            </div>
          </div>
        </div>
        <hr />
        <p className="signup__p">Or create an email account</p>
        <form className="signup__form" onSubmit={handleSignUp}>
          {/* fullname field */}
          <div>
            <label>* Full Name</label>
            <div className="signup__input">
              <input
                type="text"
                value={state.fullname}
                // onFocus={() => {
                //   handleVisit("fullname");
                // }}
                onChange={(e) => {
                  setter({ type: "fullname", payload: e.target.value });
                }}
              />
              {state.fullname.length > 0 && (
                <CancelIcon
                  className="cancelIcon"
                  fontSize="small"
                  onClick={() => setter({ type: "fullname", payload: "" })}
                />
              )}
            </div>
            {/* fullname entry check */}
            {/* {state.fullname.length === 0 && visitedInput.includes("fullname") && (
              <div className="emptyfield__warning">
                <ReportProblemIcon style={{ fontSize: "30px" }} />
                <p>Full Name is a required field</p>
              </div>
            )} */}
          </div>
          {/* email field */}
          <div>
            <label>* Email address</label>
            <div className="signup__input">
              <input
                type="email"
                value={state.email}
                // onFocus={() => {
                //   handleVisit("email");
                // }}
                onChange={(e) => {
                  setter({ type: "email", payload: e.target.value });
                }}
              />
              {state.email.length > 0 && (
                <CancelIcon
                  className="cancelIcon"
                  fontSize="small"
                  onClick={() => setter({ type: "email", payload: "" })}
                />
              )}
            </div>
            {/* email entry check */}
            {/* {state.email.length === 0 && visitedInput.includes("email") && (
              <div className="emptyfield__warning">
                <ReportProblemIcon style={{ fontSize: "30px" }} />
                <p>Email address is a required field</p>
              </div>
            )} */}
          </div>
          {/* confirm email field */}
          <div>
            <label>* Confirm Email address</label>
            <div className="signup__input">
              <input
                type="email"
                value={state.emailcheck}
                // onFocus={() => {
                //   handleVisit("emailcheck");
                // }}
                onChange={(e) => {
                  setter({ type: "emailcheck", payload: e.target.value });
                }}
              />
              {state.emailcheck.length > 0 && (
                <CancelIcon
                  className="cancelIcon"
                  fontSize="small"
                  onClick={() => setter({ type: "emailcheck", payload: "" })}
                />
              )}
            </div>
            {/* email check */}
            {/* {state.email !== state.emailcheck &&
              visitedInput.includes("emailcheck") && (
                <div className="emptyfield__warning">
                  <ReportProblemIcon style={{ fontSize: "30px" }} />
                  <p>Email address must match</p>
                </div>
              )} */}
          </div>
          {/* password field */}
          <div>
            <label>* Password</label>
            <div className="signup__input">
              {showPass ? (
                <input
                  type="text"
                  value={state.password}
                  // onFocus={() => handleVisit("passowrd")}
                  onChange={(e) => {
                    setter({ type: "password", payload: e.target.value });
                  }}
                />
              ) : (
                <input
                  type="password"
                  value={state.passowrd}
                  // onFocus={() => handleVisit("password")}
                  onChange={(e) => {
                    setter({ type: "password", payload: e.target.value });
                  }}
                />
              )}

              {showPass ? (
                <p onClick={() => setShowPass(false)}>HIDE</p>
              ) : (
                <p onClick={() => setShowPass(true)}>SHOW</p>
              )}
            </div>
            <p className="signup__message">
              Include a minimum of 6 characters, and contain at least 1 number
            </p>
            {/* password entry check */}
            {/* {state.passowrd.length === 0 && visitedInput.includes("password") && (
              <div className="emptyfield__warning">
                <ReportProblemIcon style={{ fontSize: "30px" }} />
                <p>Password is a required field</p>
              </div>
            )} */}
          </div>
          {/* confirm password field */}
          <div>
            <label>* Confirm Password</label>
            <div className="signup__input">
              {showPassCheck ? (
                <input
                  type="text"
                  value={state.passwordcheck}
                  onChange={(e) => {
                    setter({ type: "passwordcheck", payload: e.target.value });
                  }}
                />
              ) : (
                <input
                  type="password"
                  value={state.passwordcheck}
                  onChange={(e) => {
                    setter({ type: "passwordcheck", payload: e.target.value });
                  }}
                />
              )}
              {showPassCheck ? (
                <p onClick={() => setShowPassCheck(false)}>HIDE</p>
              ) : (
                <p onClick={() => setShowPassCheck(true)}>SHOW</p>
              )}
            </div>
            {/* password checking */}
            {/* {state.passwordcheck === state.password &&
              visitedInput.includes("passwordcheck") && (
                <div className="emptyfield__warning">
                  <ReportProblemIcon style={{ fontSize: "30px" }} />
                  <p>Password must match</p>
                </div>
              )} */}
          </div>
          {/* mobile field */}
          <div>
            <label>
              Cell Phone Number{" "}
              <span style={{ marginLeft: "5px" }}>(Optional)</span>
            </label>
            <div className="signup__input">
              <input
                type="text"
                value={state.mobile}
                onChange={(e) =>
                  setter({ type: "mobile", payload: e.target.value })
                }
              />
              {state.mobile.length > 0 && (
                <CancelIcon
                  className="cancelIcon"
                  fontSize="small"
                  onClick={() => setter({ type: "mobile", payload: "" })}
                />
              )}
            </div>
            <p className="signup__message">
              We will use this number to send occasional promotional messages.
            </p>
          </div>
          <div className="signup__referral">
            <label>
              Referral Code{" "}
              <span style={{ marginLeft: "5px" }}>(Optional)</span>
            </label>
            <div className="signup__input">
              <input
                type="text"
                value={state.refcode}
                onChange={(e) =>
                  setter({ type: "refcode", payload: e.target.value })
                }
              />
              {state.refcode.length > 0 && (
                <CancelIcon
                  className="cancelIcon"
                  fontSize="small"
                  onClick={() => setter({ type: "refcode", payload: "" })}
                />
              )}
            </div>
            <p className="signup__message">
              * Your referrals discount is automatically applied at cart
            </p>
          </div>
          <p className="signup__loyalty">Loyalty Reward program</p>
          <div
            className="signup__terms"
            onClick={() => setTermsCheck((prv) => !prv)}
          >
            {termsCheck ? (
              <div
                style={{
                  backgroundColor: "rgb(34,34,34)",
                  border: "2px solid rgb(34,34,34)",
                }}
              >
                <CheckIcon
                  style={{ color: "rgb(228,228,228)", fontSize: "22px" }}
                />
              </div>
            ) : (
              <div></div>
            )}

            <p className="signup__othermessage">
              Include me in the Dermstore Rewards program
              <span style={{ marginLeft: "8px" }}>Read our terms of use.</span>
            </p>
          </div>
          <button className="clicked__button" type="submit">
            CONTINUE
          </button>
        </form>
        <p className="signup__othermessage">
          By proceeding, you are confirming that you agree to our{" "}
          <span>Terms and Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
