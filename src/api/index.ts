import axios from "axios";

const STOCK_API = axios.create({ baseURL: "https://api.twelvedata.com/" })

export type StockData = {
    symbol: string,
    name: string,
    currency: string,
    exchange: string,
    mic_code: string,
    country: string,
    type: string
}

export const fetchData = () => STOCK_API.get(`/stocks`);