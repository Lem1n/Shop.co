import type { Product } from "../../../shared/api/types/api.types";
import { Stars } from "../../../entities/Stars/stars";
import { calcPercent } from "../../../entities/calcPercent/calcPercent";
import { Colors } from "../../../features/select-colors/Colors";
import { Size } from "../../../features/select-size/Size";
import { Button } from "../../../shared/buttons/button";
import { useState } from "react";
import { HandleAmount } from "../../../features/handle-amount/amount";
import { HR } from "../../../shared/hr-tag/HR";

interface ProductInfo {
	item: Product;
}

export const ProductInfo = ({ item }: ProductInfo) => {
	const percent = calcPercent({ newP: item.price.new, oldP: item.price.old });
	const [selectSize, setSelectSize] = useState("");
	const [currentColor, setCurrentColor] = useState("");
	const [amount, setAmount] = useState(1);

	const handleCart = () => {
		
	};

	return (
		<div className="w-full">
			<div className="pt-4">
				<h1 className="text-4xl font-bold">{item.name}</h1>
				<div className="flex py-3.5 items-center gap-3">
					<Stars rating={item.rating} />
					<div className="flex items-center">{item.rating}/5</div>
				</div>
				{item.price.old ? (
					<div className="flex items-center gap-2.5 font-['Satoshi-Bold'] text-3xl font-bold">
						<span>${item.price.new}</span>
						<s className="opacity-40">${item.price.old}</s>
						<span className="flex items-center  text-xs text-red-600 bg-red-600/10 py-1.5 px-3.5 rounded-4xl font-bold font-['Satoshi-Medium']">
							-{percent}%
						</span>
					</div>
				) : (
					<span>${item.price.new}</span>
				)}
				<p className="text-black/60 mt-5">{item.description}</p>
			</div>
			<HR />
			<div>
				<div className="mb-4">Select Colors</div>
				<Colors
					data={item}
					className=""
					currentColor={currentColor}
					setCurrentColor={setCurrentColor}
				/>
			</div>
			<HR />
			<div>
				<div className="mb-4">Choose Size</div>
				<Size
					data={item}
					selectSize={selectSize}
					setSelectSize={setSelectSize}
					className="gap-3"
				/>
			</div>
			<HR />
			<div className="flex align-center gap-5">
				<HandleAmount
					amount={amount}
					setAmount={setAmount}
					className="py-3 px-5 w-1/3"
				/>
				<Button
					value="Add to Cart"
					className="w-2/3"
					onClick={() => handleCart}
				/>
			</div>
		</div>
	);
};
