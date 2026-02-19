import { href, Link } from "react-router-dom";
import type { Product } from "../../shared/api/types/api.types";
import { calcPercent } from "../../entities/calcPercent/calcPercent";
import { Stars } from "../../entities/Stars/stars";
import { ROUTES } from "../../app/Routes/Routes";

interface ProductMini {
	item: Product;
}

export const ProductMini = ({ item }: ProductMini) => {
	const percent = calcPercent({ newP: item.price.new, oldP: item.price.old });

	return (
		<article>
			<div className="w-[295] h-[298]">
				<Link to={href(ROUTES.PRODUCT, { itemId: item.id })}>
					<img className="rounded-2xl" src={item.photos[0].url} />
				</Link>
			</div>
			<div className="pt-4">
				<h2>
					<Link
						className="font-['Satoshi-Bold'] font-bold text-xl"
						to={href(ROUTES.PRODUCT, { itemId: item.id })}
					>
						{item.name}
					</Link>
				</h2>
				<div className="flex py-2 items-center gap-3">
					<Stars rating={item.rating} />
					<div className="flex items-center">{item.rating}/5</div>
				</div>
				{item.price.old ? (
					<div className="flex items-center  gap-2.5 font-['Satoshi-Bold'] text-2xl font-bold">
						<span>${item.price.new}</span>
						<s className="opacity-40">${item.price.old}</s>
						<span className="flex items-center  text-xs text-red-600 bg-red-600/10 py-1.5 px-3.5 rounded-4xl font-bold font-['Satoshi-Medium']">
							-{percent}%
						</span>
					</div>
				) : (
					<div>${item.price.new}</div>
				)}
			</div>
		</article>
	);
};
