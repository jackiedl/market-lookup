import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { StockData } from '../../../api';

export interface ResultState {
    results: StockData[],
}

const initialState: ResultState = {
    results: [],
}

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        search: (state, action: PayloadAction<StockData[]>) => {
            state.results = action.payload;
        }
    }
})

export const { search } = resultSlice.actions;

export const searchResult = (state: RootState) => state.result.results;

export default resultSlice.reducer;