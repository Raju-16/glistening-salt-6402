import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogInSignUpNavbar.css";

const LogInSignUpNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="loginsignupnavbar">
      <img
        onClick={() => navigate("/")}
        src="https://s1.thcdn.com/enterprise/assets/dermstore-global-a3ce7f42-4a2c-4cc5-ad05-ba594900fa02-logo-default.svg"
        alt="dermstore-logo"
      />
    </div>
  );
};

export default LogInSignUpNavbar;
