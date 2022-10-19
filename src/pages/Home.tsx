import React, { useState, useEffect}from "react";
import { fetchStocks } from "../api";
import { SearchBar } from "../components/AutoComplete";

export const Home = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>();

    useEffect(() => {
        async function fetchStockData() {
            //add redux in future to check if state already has data so we don't always  
            //execute this api call everytime we go back to the home page
            fetchStocks().then((results) => {
                setData(results);
                setLoading(false);
            });  
        }
        fetchStockData();
    }, []);

    if (isLoading){
        return <div className="App">Loading...</div>
    }

    return(
        <div>
            <SearchBar data={data} />
        </div>
    );
}

