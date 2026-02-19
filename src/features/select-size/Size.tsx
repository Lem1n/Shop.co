import type { Product } from "@/shared/api/types/api.types";
import React from "react";
interface Size {
	data: Product;
	selectSize: string;
	setSelectSize: React.Dispatch<React.SetStateAction<string>>;
	className: string;
}

export const Size = ({ data, selectSize, setSelectSize, className }: Size) => {
	const {size} = data;
	return (
		<div className={`${className} flex align-center`}>
			{size.map((i, index) => (
				<button
					key={index}
					onClick={() => setSelectSize(i)}
					className={`py-3 px-6 rounded-4xl ${selectSize === i ? " text-white bg-black" : "text-black bg-black/10"}`}
				>
					{i}
				</button>
			))}
		</div>
	);
};
