import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICart, ICartItems, itemId } from "../type/type";

const initialState: ICartItems = {
	cart: {},
	Ids: [],
};
const initialItemAmount: ICart = {
	id: "",
	color: "",
	name: "",
	photo: "",
	price: 0,
	size: "",
	amount: 0,
};
interface AddCartAction {
	payload: ICart;
}

interface HandleCartAction {
	payload: { type: "increment" | "decrement" };
	itemId: itemId;
}

interface RemoveCartAction {
	itemId: itemId;
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCart: (state, action: PayloadAction<AddCartAction>) => {
			const item = action.payload.payload;
			if (state.cart[item.id]) {
				state.cart[item.id].amount++;
			} else {
				state.cart[item.id] = item;
				state.Ids.push(item.id);
			}
		},
		handleCart: (state, action: PayloadAction<HandleCartAction>) => {
			const { itemId } = action.payload;
			const item = state.cart[itemId];
			if (!item) return; // early return вместо добавления пустого

			if (action.payload.payload.type === "increment") {
				item.amount++;
			} else if (action.payload.payload.type === "decrement") {
				item.amount--;
				if (item.amount <= 0) {
					delete state.cart[itemId];
					state.Ids = state.Ids.filter((id) => id !== itemId);
				}
			}
		},
		removeCart: (state, action: PayloadAction<RemoveCartAction>) => {
			const { itemId } = action.payload;
			delete state.cart[itemId]; // для Record используй delete (immer позволяет)
			state.Ids = state.Ids.filter((id) => id !== itemId);
		},
	},
});

export const { reducer, actions } = cartSlice;
