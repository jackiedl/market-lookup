import React, { useEffect}from "react";

import { useAppSelector, useAppDispatch } from '../redux/app/hooks';
import { fetchDataAsync, selectStatus, selectStock } from '../redux/features/data/dataSlice';

import { AutoComplete } from "../components/AutoComplete/index";

export const Home = () => {
    const status = useAppSelector(selectStatus);
    //const selected = useAppSelector(selectStock);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [dispatch]);

    if (status === "loading"){
        return <div className="App">Loading...</div>
    }

    return(
        <div>
            <AutoComplete />
        </div>
    );
}

