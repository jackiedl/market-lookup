import React from "react";

import '../../styles/components/AutoComplete/results.css';

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { fetchTimeSeriesAsync } from '../../redux/features/chart/chartSlice';
import { select } from '../../redux/features/stock/stockSlice';
import { textData, handleOnChange } from '../../redux/features/data/dataSlice';
import { searchResult } from '../../redux/features/search/searchSlice';

export const AutoCompleteResults : React.FC = () => {
    const text = useAppSelector(textData);
    const result = useAppSelector(searchResult);

    const dispatch = useAppDispatch();


    const suggestionSelected = (value: any) => {
        dispatch(handleOnChange(""));
        dispatch(select(value));
        const param = { symbol: value.symbol}
        dispatch(fetchTimeSeriesAsync(param))
        
    }

    const renderResults  = () => {
        return (
            <ul id="results-ul">
            {result.slice(0, 10).map((item: any, i: any) => 
                <li className="results-li" onClick={() => suggestionSelected(item)}  key={i + item.symbol}>
                    {item.name}
                </li>)}
            </ul>
        )
    }

    if (result.length === 0 || text.length === 0){
        return <div></div>;
    }

    return(
        <div id="results-wrapper">
            {renderResults()}
        </div>
    )
}