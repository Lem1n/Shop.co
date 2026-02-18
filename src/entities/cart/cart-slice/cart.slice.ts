import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
	ICart,
	ICartItems,
	itemId,
} from "../type/type";

type handleCartAction = {
	payload: ICartItems;
	itemId: itemId;
	type: "increment" | "decrement";
};

const initialState: ICartItems = {};
const initialItemAmount: ICart = { amount: 0 };

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		handleCart: (state, action: PayloadAction<handleCartAction>) => {
			const { itemId } = action.payload;
			if (!state.cart[itemId]) {
				state.cart[itemId] = initialItemAmount;
			}
			if (action.type === "increment") {
				state.cart[itemId].amount++;
			} else if (action.type === "decrement") {
				state.cart[itemId].amount--;
			}
		},
	},
});

export const { reducer, actions } = cartSlice;
