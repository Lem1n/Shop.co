import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { api } from "../../shared/api/api";
import { reducer as cartReducers } from "../../entities/cart/cart-slice/cart.slice";

const reducers = combineReducers({
	cart: cartReducers,
	[api.reducerPath]: api.reducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getMiddleware) => getMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
