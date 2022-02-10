import React from "react";
import "./logo.styles.css";
import WhiteLogo from "../../assets/img/logo-white.png";

const Logo = () => {
    return <div className="logo-box">
        <img className="logo" src={WhiteLogo} alt="logo" />
    </div>
}

export default Logo;