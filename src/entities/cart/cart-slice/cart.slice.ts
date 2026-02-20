import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICart, ICartItems, itemId } from "../type/type";

const initialState: ICartItems = {
	cart: {},
	Ids: [],
};
interface AddItemAction {
	payload: ICart;
}

interface HandleItemAction {
	payload: { type: "increment" | "decrement" };
	itemId: itemId;
}

interface RemoveItemAction {
	itemId: itemId;
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<AddItemAction>) => {
			const item = action.payload.payload;
			if (state.cart[item.id]) {
				state.cart[item.id].amount++;
			} else {
				state.cart[item.id] = item;
				state.Ids.push(item.id);
			}
		},
		handleItem: (state, action: PayloadAction<HandleItemAction>) => {
			const { itemId } = action.payload;
			const item = state.cart[itemId];
			if (!item) return;

			const { type } = action.payload.payload;
			const prevAmount = item.amount; 
			const { price } = item;

			if (type === "increment") {
				item.amount++;
			} else if (type === "decrement") {
				item.amount--;
			}

			const oldUnitPrice = price.old / prevAmount;
			const newUnitPrice = price.new / prevAmount;
			price.old = oldUnitPrice * item.amount;
			price.new = newUnitPrice * item.amount;
		},
		removeItem: (state, action: PayloadAction<RemoveItemAction>) => {
			const { itemId } = action.payload;
			delete state.cart[itemId];
			state.Ids = state.Ids.filter((id) => id !== itemId);
		},
	},
});

export const { reducer, actions } = cartSlice;
