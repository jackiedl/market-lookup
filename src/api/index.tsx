import axios from "axios";

const STOCK_API = axios.create({ baseURL: "https://api.twelvedata.com/" })


type FetchStockData = {
    symbol: string,
    name: string,
    currency: string,
    exchange: string,
    mic_code: string,
    country: string,
    type: string
}

export const fetchStocks = async () => {
    try{
        const response = await STOCK_API.get(`/stocks`)
        //parse response to return only stock data for common stocks in USA
        const stockList = response.data.data.filter( (stock: FetchStockData ) => stock.country === "United States" && stock.type === "Common Stock");
        return stockList;
        
    } catch (error) {
        console.log("Error fetching stock data", error);
    }
};
