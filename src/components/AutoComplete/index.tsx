import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { select, selectData } from '../../redux/features/data/dataSlice';

export const AutoComplete: React.FC = () => {
    const data = useAppSelector(selectData);
    const [suggestions, setSuggestion] = useState<any>([])
    const [text, setText] = useState<string>("");

    const dispatch = useAppDispatch();

    const handleOnChange = (e: any) => {
        const value = e.target.value;
        let  suggestion = [{}];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, "i")
            suggestion = data.filter( v => regex.test(v.name));
        }
        setSuggestion(suggestion);
        setText(value);
    }

    const suggestionSelected = (value: any) => {
        setText(value.name);
        setSuggestion([]);
        dispatch(select(value))
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