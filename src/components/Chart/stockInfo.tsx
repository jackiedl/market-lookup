import React, {  } from "react";

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { selectStock} from "../../redux/features/stock/stockSlice";

const StockInfo: React.FC = () => {
    const stock = useAppSelector(selectStock);

    return (
        <div>
            <p>Name: {stock?.name}</p>
            <p>Symbol: {stock?.symbol}</p>
            <p>Exchange: {stock?.exchange}</p>
        </div>
    )
}

export default StockInfo;