import SvgIcon from "../svg-icon/SvgIcon";
import type { Product } from "@/shared/api/types/api.types";

type Colors = {
	data: Product;
	className: string;
	currentColor: string;
	setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
};

export const Colors = ({
	data,
	className,
	currentColor,
	setCurrentColor,
}: Colors) => {
	const { colors } = data;
	const normalizedColors = colors.map((color) => color.replace(/ /g, "_"));
	return (
		<div className={`${className} flex gap-4`}>
			{normalizedColors.map((i, index) => (
				<div className="relative" key={index}>
					{currentColor === i && (
						<SvgIcon
							name={`${i === "White" ? "shared-checkbox-black" : "shared-checkbox-white"}`}
							color="black"
							className="absolute translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2 w-4 h-4"
						/>
					)}
					<figure
						className={`figure-${i} ${i === "White" ? "border-[1px] border-black/20" : i === "Black" && "border-[1px] border-white/20"} w-[37px] h-[37px] rounded-3xl`}
						onClick={() => setCurrentColor(i)}
					/>
				</div>
			))}
		</div>
	);
};
