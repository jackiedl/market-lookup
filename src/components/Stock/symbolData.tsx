import React from "react";
import { SymbolInfo } from "react-ts-tradingview-widgets";

import { useAppSelector } from '../../redux/app/hooks';
import { selectStock} from "../../redux/features/stock/stockSlice";


const SymbolData: React.FC = () => {
    const stock = useAppSelector(selectStock);

    return(
        <SymbolInfo 
            symbol={stock?.symbol} 
            autosize />
    );
}

export default SymbolData;