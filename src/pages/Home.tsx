import React, { useEffect}from "react";

import { useAppSelector, useAppDispatch } from '../redux/app/hooks';
import { fetchDataAsync, selectStatus } from '../redux/features/data/dataSlice';

import { Loading } from "./Loading";
import { Navbar } from "../components/Navbar";
import { AutoComplete } from "../components/AutoComplete/index";
import { AutoCompleteResults } from "../components/AutoComplete/results";
import { StockChart } from "../components/Stock/index";


import "../styles/pages/Home.css";

import Logo from "../assets/logo.png";

export const Home = () => {
    const status = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [dispatch]);

    if (status === "loading"){
        return <Loading />
    }
    
    return(
        <div id="home-page">
            <Navbar />
            <div id="home-page-logo">
            <img
                src={Logo}
                alt="logo"
                className="logo"
            />
            </div>
            <AutoComplete />
            <StockChart />
            <AutoCompleteResults />
        </div>
    );
}

