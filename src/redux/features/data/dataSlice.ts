import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { StockData, fetchData } from '../../../api';

export interface DataState {
    stockdata: StockData[];
    status: 'idle' | 'loading' | 'failed';
};

const initialState: DataState = {
    stockdata: [],
    status: 'idle',
};

export const fetchDataAsync = createAsyncThunk(
    'data/fetchData',
    async () => {
        const response = await fetchData();
        return response.data;
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsync.pending, ( state ) => {
            state.status = 'loading';
        })
        .addCase(fetchDataAsync.fulfilled, ( state, action ) => {
            state.status = 'idle';
            const stockList = action.payload.data.filter( (stock: StockData ) => stock.country === "United States" && stock.type === "Common Stock");
            state.stockdata = stockList;
        })
        .addCase(fetchDataAsync.rejected, ( state ) => {
            state.status = 'failed';
        })
    }
});

export const selectData = (state: RootState) => state.data.stockdata;
export const selectStatus = (state: RootState) => state.data.status;

export default dataSlice.reducer;