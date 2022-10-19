import axios from "axios";

const STOCK_API = axios.create({ baseURL: "https://api.twelvedata.com/" })

export const fetchStocks = async () => {
    try{
        const response = await STOCK_API.get(`/stocks`)
        //parse response to return only stock data for common stocks in USA
        const stockList = response.data.data.filter( (stock: any ) => stock.country === "United States" && stock.type === "Common Stock");
        return stockList;
        
    } catch (error) {
        console.log("Error fetching stock data", error);
    }
};
