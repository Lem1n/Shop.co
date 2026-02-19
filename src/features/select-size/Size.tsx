import React, { useState } from "react";
interface Size {
	size: string[];
	selectSize: string;
	setSelectSize: React.Dispatch<React.SetStateAction<string>>;
	className: string;
}

export const Size = ({ size, selectSize, setSelectSize, className }: Size) => {
	return (
		<div className={`${className} flex align-center`}>
			{size.map((i) => (
				<button
					key={i}
					onClick={() => setSelectSize(i)}
					className={`py-3 px-6 rounded-4xl ${selectSize === i ? " text-white bg-black" : "text-black bg-black/10"}`}
				>
					{i}
				</button>
			))}
		</div>
	);
};
