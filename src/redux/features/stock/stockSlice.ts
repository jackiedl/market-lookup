import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StockData } from '../../../api';
import { RootState} from '../../app/store';

export interface StockState {
    stock: StockData | null,
    status: 'unselected' | 'selected' | 'loading' | 'failed';
}

const initialState: StockState = {
    stock: null,
    status: 'unselected',
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<StockData>) => {
            state.stock = action.payload;
            state.status = 'selected';
        }
    }
});

export const { select } = stockSlice.actions;

export const selectStock = (state: RootState) => state.stock.stock;
export const stockStatus = (state: RootState) => state.stock.status;

export default stockSlice.reducer;