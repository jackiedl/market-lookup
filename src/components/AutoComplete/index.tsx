import React, { useState } from "react";
import '../../styles/components/AutoComplete/autocomplete.css';

import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { selectData, textData, handleOnChange } from '../../redux/features/data/dataSlice';
import { search } from '../../redux/features/search/searchSlice';

export const AutoComplete: React.FC = () => {
    const data = useAppSelector(selectData);
    const text = useAppSelector(textData);
    
    const dispatch = useAppDispatch();

    const OnChange = (e: any) => {
        const value = e.target.value;
        let  suggestion;
        if (value.length > 0){
            const val = value.replace(/[\][)(\\]/g, "");
            const regex = new RegExp(`^${val}`, "i")
            suggestion = data.filter( v => regex.test(v.name));
            dispatch(search(suggestion));
        }
        dispatch(handleOnChange(value));
    }

    return(
        <div id="search-wrapper">
            <div id="search-bar">
                <input value={text} onChange={OnChange} type="text" id="search-autocomplete" autoComplete="off"></input>
            </div>
        </div>
        
    )

}