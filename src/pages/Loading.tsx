import React, { } from "react";

import "../assets/logo.png";
import "../styles/pages/Loading.css";

export const Loading: React.FC = () => {
    return(
        <div className="loader">
            <span className="loader-bar"></span>
        </div>
    )
}