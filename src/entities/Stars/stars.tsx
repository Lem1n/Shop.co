import SvgIcon from "../../features/svg-icon/SvgIcon";

type Rating = { rating: number };
export const Stars = ({ rating }: Rating) => {
	const fullStars = Math.floor(rating);
	const hasHalf = rating % 1 >= 0.5;

	return (
		<div className="flex items-center gap-1.5">
			{Array.from({ length: fullStars }, (_, i) => (
				<SvgIcon className="w-4.5 h-4.5" name="entities-star-full" key={i} />
			))}
			{hasHalf && <SvgIcon className="w-2.5 h-4.5" name="entities-star-half" />}
		</div>
	);
};
