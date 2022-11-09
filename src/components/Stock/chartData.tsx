import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

import { useAppSelector } from '../../redux/app/hooks';
import { selectStock} from "../../redux/features/stock/stockSlice";


const ChartData: React.FC = () => {
    const stock = useAppSelector(selectStock);

    return(
        <AdvancedRealTimeChart 
            theme="dark" 
            symbol={stock?.symbol} 
            allow_symbol_change={false} 
            height="500px" />

    );
}

export default ChartData;