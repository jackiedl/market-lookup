import React from "react";

import { useAppSelector } from '../../redux/app/hooks';

import { AutoComplete } from "../AutoComplete/";
import Logo from "../../assets/logo.png"

import { stockStatus } from "../../redux/features/stock/stockSlice";

export const MainSearch: React.FC = () => {
    const status = useAppSelector(stockStatus);

    return(
        <div className={`home-content ${status==="selected" ? "hidden" : ""}`}>
            <div id="home-page-logo">
                <img
                    src={Logo}
                    alt="logo"
                    className="logo"
                />
            </div>
            <AutoComplete />
        </div>
    );
}

