import type { Product } from "@/shared/api/types/api.types";


export interface ICart extends Omit<Product, 'comments' | "size" | "colors"> {
	size: string;
	color: string;
	amount: number;
}

export type itemId = string;
export interface ICartItems {
	cart: Record<itemId, ICart>;
	Ids: itemId[];
}
