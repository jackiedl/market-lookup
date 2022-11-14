import React, { } from "react";

import "../assets/logo.png";
import "../styles/pages/Loading.css";
import Logo from "../assets/logo.png";

export const Loading: React.FC = () => {
    return(
        <div className="loader">
            <span>
                <img
                    src={Logo}
                    alt="logo"
                    className="logo"
                />
            </span>
            <span className="loader-bar"></span>
        </div>
    )
}