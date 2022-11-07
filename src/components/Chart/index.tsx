import React, {  } from "react";

import { useAppSelector } from '../../redux/app/hooks';
import { stockStatus} from "../../redux/features/stock/stockSlice";

import StockInfo from "./stockInfo";
import ChartData from "./chartData";

export const StockChart: React.FC = () => {
    //This component will hold both stock data (left side) and stock chart (right side)
    const status = useAppSelector(stockStatus);
    
    if (status === "unselected"){
        return <div></div>
    }

    return(
        <div id="stock-info-wrapper">
            <StockInfo />
            <ChartData />
        </div>
    );
}