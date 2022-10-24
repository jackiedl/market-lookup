import axios from "axios";

const STOCK_API = axios.create({ baseURL: "https://api.twelvedata.com/" })

const API_KEY = process.env.REACT_APP_API_KEY;

export type StockData = {
    symbol: string,
    name: string,
    currency: string,
    exchange: string,
    mic_code: string,
    country: string,
    type: string
}

interface TSMeta {
    currency: string,
    exchange: string,
    exchange_timezone: string,
    interval: string,
    mic_code: string,
    symbol: string,
    type: string
}
interface TSValues {
    datetime: string,
    open: string,
    high: string,
    low: string,
    close: string,
    volume: string,
}

export type TimeSeries = {
    meta: TSMeta,
    values: TSValues[],
    status: string,
}
//fetch list of stocks
export const fetchData = () => STOCK_API.get(`/stocks`);
//Supports: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 1day, 1week, 1month
//Supports output values in the range from 1 to 5000
export const fetchTimeSeries = (symbol: string, interval:number, output:number) => 
    STOCK_API.get(`/time_series?symbol=${symbol}&interval=${interval}min&outputsize=${output}&apikey=${API_KEY}`);