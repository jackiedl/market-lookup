import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { StockData, fetchData } from '../../../api';

export interface DataState {
    stockdata: StockData[];
    text: string;
    status: 'idle' | 'loading' | 'failed';
};

const initialState: DataState = {
    stockdata: [],
    text: "",
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
        handleOnChange: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
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

export const { handleOnChange } = dataSlice.actions;

export const selectData = (state: RootState) => state.data.stockdata;
export const selectStatus = (state: RootState) => state.data.status;
export const textData = (state: RootState) => state.data.text;

export default dataSlice.reducer;