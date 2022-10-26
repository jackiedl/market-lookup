import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { selectData } from '../../redux/features/data/dataSlice';
import { select } from '../../redux/features/stock/stockSlice';
import { fetchTimeSeriesAsync } from '../../redux/features/chart/chartSlice';

export const AutoComplete: React.FC = () => {
    const data = useAppSelector(selectData);
    const [suggestions, setSuggestion] = useState<any>([])
    const [text, setText] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleOnChange = (e: any) => {
        const value = e.target.value;
        let  suggestion = [{}];
        if (value.length > 0){
            const val = value.replace(/[\][)(\\]/g, "");
            const regex = new RegExp(`^${val}`, "i")
            suggestion = data.filter( v => regex.test(v.name));
        }
        setSuggestion(suggestion);
        setText(value);
    }

    const suggestionSelected = (value: any) => {
        setText(value.name);
        setSuggestion([]);
        dispatch(select(value));
        const param = { symbol: value.symbol}
        dispatch(fetchTimeSeriesAsync(param))
    }

    const renderSuggestion = () => {
        if (suggestions.length === 0 || text.length === 0){
            return null;
        }
        return (
            <ul id="results">
                {suggestions.slice(0, 10).map((item: any, i: any) => <li onClick={() => suggestionSelected(item)}  key={i + item.symbol}>{item.name}</li>)}
            </ul>
        )
    }

    return(
        <div>
            <input value={text} onChange={handleOnChange} type="text" id="autocomplete" placeholder="Stock Name lookup" autoComplete="off"></input>
            {renderSuggestion()}
        </div>
    )

}