import React, { useEffect}from "react";

import { useAppSelector, useAppDispatch } from '../redux/app/hooks';
import { fetchDataAsync, selectStatus } from '../redux/features/data/dataSlice';

import { Loading } from "./Loading";
import { Navbar } from "../components/Navbar";
import { MainSearch } from "../components/MainSearch";
import { StockChart } from "../components/Stock/index";


import "../styles/pages/Home.css";


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
            <Navbar/>
            <MainSearch />
            <StockChart />    
        </div>
    );
}

