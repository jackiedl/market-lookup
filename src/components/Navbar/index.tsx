import React from "react";

import Logo from "../../assets/logo-nav.png";
import { AutoComplete } from "../AutoComplete";


export const Navbar: React.FC = () => {

    return(
        <div id="nav-container" className="hide-nav">
            <div id="nav-wrapper">
                <div id="nav-logo">
                    <img
                        src={Logo}
                        alt="logo"
                        className="logo"
                    />
                </div>
                <div id="nav-content">
                    <AutoComplete />
                </div>
            </div>
        </div>
    )
}