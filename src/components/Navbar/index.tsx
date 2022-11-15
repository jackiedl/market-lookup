import React from "react";

import { useAppSelector } from '../../redux/app/hooks';

import Logo from "../../assets/logo-nav.png";
import { AutoComplete } from "../AutoComplete";

import { stockStatus } from "../../redux/features/stock/stockSlice";

export const Navbar: React.FC = () => {
    const status = useAppSelector(stockStatus);

    return(
        <div id="nav-container" className={`${status==="selected" ? "" : "hidden"}`}>
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