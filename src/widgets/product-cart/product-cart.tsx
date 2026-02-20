import { ROUTES } from "@/app/Routes/Routes";
import { useActions } from "@/entities/cart/hooks/useActions";
import type { ICart } from "@/entities/cart/type/type";
import { HandleAmount } from "@/features/handle-amount/amount";
import SvgIcon from "@/features/svg-icon/SvgIcon";
import { href, Link } from "react-router-dom";

interface ProductCart {
	item: ICart;
}

export const ProductCart = ({ item }: ProductCart) => {
	const { handleItem, removeItem } = useActions();

	return (
		<article className="h-31 flex justify-between">
			<div className="flex items-center">
				<div className="w-31 h-full">
					<Link to={href(ROUTES.PRODUCT, { itemId: item.id })}>
						{" "}
						<img
							src={item.photos[0].url}
							alt={item.name}
							className="object-cover rounded-2xl"
						/>
					</Link>
				</div>
				<div className="ml-4">
					<div className="flex flex-col justify-between">
						<Link to={href(ROUTES.PRODUCT, { itemId: item.id })}>
							<h2 className="font-bold text-xl">{item.name}</h2>
						</Link>
						<div className="flex flex-col">
							<div className="flex gap-1">
								<p>Size:</p>
								<span className="text-black/60">
									{item.size}
								</span>
							</div>
							<div className="flex gap-1">
								<p>Color:</p>
								<span className="text-black/60">
									{item.color}
								</span>
							</div>
						</div>
					</div>
					<span className="font-bold mt-3.5">${item.price.new}</span>
				</div>
			</div>
			<div className="flex flex-col items-end justify-between">
				<button onClick={() => removeItem({ itemId: item.id })}>
					<SvgIcon name="shared-delete" className="w-6 h-6" />
				</button>
				<HandleAmount
					amount={item.amount}
					changeAmountMinus={() => handleItem({itemId: item.id, payload: {type: "decrement"}})}
					changeAmountPlus={() => handleItem({itemId: item.id, payload: {type: "increment"}})}
					className="w-31.5 h-11 py-3 px-5"
				/>
			</div>
		</article>
	);
};
