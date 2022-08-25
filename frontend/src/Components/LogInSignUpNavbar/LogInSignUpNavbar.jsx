import React from "react";
import { Link } from "react-router-dom";
import "./LogInSignUpNavbar.css";

const LogInSignUpNavbar = () => {
  return (
    <div className="loginsignupnavbar">
      <Link to="/">
        <img
          src="https://s1.thcdn.com/enterprise/assets/dermstore-global-a3ce7f42-4a2c-4cc5-ad05-ba594900fa02-logo-default.svg"
          alt="dermstore-logo"
        />
      </Link>
    </div>
  );
};

export default LogInSignUpNavbar;
