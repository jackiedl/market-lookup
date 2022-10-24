import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { StockData, TimeSeries, fetchTimeSeries } from '../../../api';

export interface StockState {
    stock: StockData | null,
    status: 'unselected' | 'selected' | 'loading' | 'failed';
    timeseries: TimeSeries | null
    timeseriesatus: 'idle' | 'loading' | 'failed';
}

const initialState: StockState = {
    stock: null,
    status: 'unselected',
    timeseries: null,
    timeseriesatus: 'idle',
};

export const fetchTimeSeriesAsync = createAsyncThunk(
    'stock/fetchTimeSeries',
    async (param: any) => {
        const {symbol, interval, output} = param;
        const response = await fetchTimeSeries(symbol, interval, output);
        return response.data;
    }
)

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<StockData>) => {
            state.stock = action.payload;
            state.status = 'selected';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTimeSeriesAsync.pending, ( state ) => {
            state.timeseriesatus  = 'loading';
        })
        .addCase(fetchTimeSeriesAsync.fulfilled, ( state, action ) => {
            state.timeseriesatus  = 'idle';
            const chartData = action.payload;
            state.timeseries = chartData;
        })
        .addCase(fetchTimeSeriesAsync.rejected, ( state ) => {
            state.timeseriesatus  = 'failed';
        })
    }
});

export const { select } = stockSlice.actions;

export const selectStock = (state: RootState) => state.stock.stock;
export const stockStatus = (state: RootState) => state.stock.status;
export const timeSeries = (state: RootState) => state.stock.timeseries;
export const timeSeriesStatus = (state: RootState) => state.stock.timeseriesatus;

export default stockSlice.reducer;