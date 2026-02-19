import { useState } from "react"
import SvgIcon from "../svg-icon/SvgIcon"

type Colors = {
	colors: string[];
	className: string;
	currentColor: string;
	setCurrentColor: React.Dispatch<React.SetStateAction<string>>
};

export const Colors = ({
	colors,
	className,
	currentColor,
	setCurrentColor,
}: Colors) => {
	const normalizedColors = colors.map((color) => color.replace(/ /g, "_"));
	return (
		<div className={`${className} flex gap-4`}>
			{normalizedColors.map((i) => (
				<div className="relative">
					{currentColor === i && (
						<SvgIcon
							name="shared-checkbox"
							color="black"
							className="absolute translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2 w-4 h-4"
						/>
					)}
					<figure
						key={i}
						className={`${i} ${i === "White" ? "border-[1px] border-black/20" : i === "Black" && "border-[1px] border-white/20"} w-[37px] h-[37px] rounded-3xl`}
						onClick={() => setCurrentColor(i)}
					/>
				</div>
			))}
		</div>
	);
};