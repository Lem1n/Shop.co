import { calcPercent } from "@/entities/calcPercent/calcPercent";
import { useCart } from "@/entities/cart/hooks/useCart";

export const useItemsReducers = () => {
	const { cart } = useCart();
	const items = cart.Ids.map((i) => cart.cart[i]);
	const itemsOldPrice = items.reduce(
		(acc, item) => acc + (item.price.old || 0),
		0,
	);
	const itemsTotalPrice = items.reduce(
		(acc, item) => acc + (item.price.new || 0),
		0,
	);
	const Discount = itemsOldPrice - itemsTotalPrice;
	const percent = calcPercent({ newP: itemsTotalPrice, oldP: itemsOldPrice });

	return { itemsOldPrice, itemsTotalPrice, Discount, percent };
};
