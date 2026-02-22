import SvgIcon from "../svg-icon/SvgIcon";

type Colors = {
	data: string[];
	className: string;
	selectColor: string;
	setSelectColor: React.Dispatch<React.SetStateAction<string>>;
};

export const Colors = ({
	data,
	className,
	selectColor,
	setSelectColor,
}: Colors) => {
	const normalizedColors = data.map((color) => color.replace(/ /g, "_"));
	return (
		<div className={`${className} flex gap-4`}>
			{normalizedColors.map((i, index) => (
				<div className="relative" key={index}>
					{selectColor === i && (
						<SvgIcon
							name={`${i === "White" ? "shared-checkbox-black" : "shared-checkbox-white"}`}
							color="black"
							className="absolute translate-y-[-50%] translate-x-[-50%] top-1/2 left-1/2 w-4 h-4"
						/>
					)}
					<figure
						className={`figure-${i} ${i === "White" ? "border-[1px] border-black/20" : i === "Black" && "border-[1px] border-white/20"} w-[37px] h-[37px] rounded-3xl`}
						onClick={() => setSelectColor(i)}
					/>
				</div>
			))}
		</div>
	);
};
