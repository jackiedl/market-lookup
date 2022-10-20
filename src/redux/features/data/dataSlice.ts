import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { StockData, fetchData } from '../../../api';

export interface DataState {
    stockdata: StockData[];
    selectedStock: any;
    status: 'idle' | 'loading' | 'failed';
};

const initialState: DataState = {
    stockdata: [],
    selectedStock: {},
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
        select: (state, action: PayloadAction<StockData>) => {
            state.selectedStock = action.payload;
        }
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

export const { select } = dataSlice.actions;

export const selectData = (state: RootState) => state.data.stockdata;
export const selectStatus = (state: RootState) => state.data.status;
export const selectStock = (state: RootState) => state.data.selectedStock;

export default dataSlice.reducer;