import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import stockReducer from '../features/stock/stockSlice';
import resultReducer from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer,
        stock: stockReducer,
        result: resultReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;