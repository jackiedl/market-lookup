import React, { useState } from "react";

interface StockData {
    symbol: string,
    name: string,
    currency: string,
    exchange: string,
    mic_code: string,
    country: string,
    type: string
}

type StockDataProp = {
    data: StockData[],
}

export const SearchBar: React.FC<StockDataProp> = (props) => {
    const [suggestions, setSuggestion] = useState<any>([])
    const [text, setText] = useState<string>("");

    const handleOnChange = (e: any) => {
        const value = e.target.value;
        let  suggestion = [{}];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, "i")
            suggestion = props.data.filter( v => regex.test(v.name));
        }
        setSuggestion(suggestion);
        setText(value);
    }

    const suggestionSelected = (value: any) => {
        setText(value);
        setSuggestion([]);
    }

    const renderSuggestion = () => {
        if (suggestions.length === 0 || text.length === 0){
            return null;
        }
        return (
            <ul id="results">
                {suggestions.slice(0, 10).map((item: any, i: any) => <li onClick={() => suggestionSelected(item.name)}  key={i + item.symbol}>{item.name}</li>)}
            </ul>
        )
    }

    return(
        <div>
            <input value={text} onChange={handleOnChange} type="text" id="autocomplete" placeholder="Stock Name lookup"></input>
            {renderSuggestion()}
        </div>
    )

}