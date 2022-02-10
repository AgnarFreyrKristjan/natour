import React from "react";
import Logo from "../logo/logo.component"
import Btn from "../button/button.components"
import "../header/header.styles.css"

const Header = () => {
    return <header className="header">
        <Logo />
        <div className="text-box">
            <h1 className="heading-primary">
                <span className="heading-primary-main">OUTDOORS</span>
                <span className="heading-primary-sub">IS WHERE LIFE HAPPENS</span>
            </h1>
            <Btn />
        </div>
    </header>
}

export default Header;