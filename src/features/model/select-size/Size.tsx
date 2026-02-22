import React from "react";
interface Size {
	data: string[];
	selectSize: string;
	setSelectSize: React.Dispatch<React.SetStateAction<string>>;
	className: string;
}

export const Size = ({ data, selectSize, setSelectSize, className }: Size) => {
	return (
		<div className={`${className} flex align-center`}>
			{data.map((i, index) => (
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
