import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { TimeSeries, fetchTimeSeries } from '../../../api';

export interface ChartState {
    timeseries: TimeSeries[] | null;
    chartstatus: 'idle' | 'loading' | 'failed';
    showChart: TimeSeries | null;
}

const initialState: ChartState = {
    timeseries: null,
    chartstatus: 'loading',
    showChart: null,
}

export const fetchTimeSeriesAsync = createAsyncThunk(
    'chart/fetchTimeSeries',
    async (param: any) => {
        const {symbol} = param;
        const response1D = fetchTimeSeries(symbol, "1min", "78");
        const response5D = fetchTimeSeries(symbol, "1min", "78");
        const response1M = fetchTimeSeries(symbol, "1min", "78");
        const response1Y = fetchTimeSeries(symbol, "1min", "78");
        
        let [TS1D, TS5D, TS1M, TS1Y] = await Promise.all([response1D, response5D, response1M, response1Y]);
        return [TS1D.data, TS5D.data, TS1M.data, TS1Y.data]
    }
)

export const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTimeSeriesAsync.pending, ( state ) => {
            state.chartstatus  = 'loading';
        })
        .addCase(fetchTimeSeriesAsync.fulfilled, ( state, action ) => {
            state.chartstatus  = 'idle';
            const chartData = action.payload;
            state.timeseries = chartData;
            state.showChart = chartData[0];
        })
        .addCase(fetchTimeSeriesAsync.rejected, ( state ) => {
            state.chartstatus  = 'failed';
        })
    }
})

export const chartstatus = (state: RootState) => state.chart.chartstatus;
export const showchart = (state: RootState) => state.chart.showChart;

export default chartSlice.reducer;
