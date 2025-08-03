import { configureStore } from "@reduxjs/toolkit";
import { BookApi } from "../features/BookApi";
import { BorrowApi } from "../features/BorrowApi";



export const store = configureStore({
    reducer: {
        [BookApi.reducerPath]: BookApi.reducer,
        [BorrowApi.reducerPath]: BorrowApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(BookApi.middleware)
            .concat(BorrowApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;