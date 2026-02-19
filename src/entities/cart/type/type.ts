

export interface ICart {
	id: string;
	name: string;
	size: string | string[];
	color: string | string[];
	price: number;
	photo: string;
	amount: number;
}

export type itemId = string;
export interface ICartItems {
	cart: Record<itemId, ICart>;
	Ids: itemId[];
}
