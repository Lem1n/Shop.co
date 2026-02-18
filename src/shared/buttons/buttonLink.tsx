import { Link } from "react-router-dom";

interface ButtonLink {
	value: string;
	link: string;
	className: string
}

export const ButtonLink = ({ value, link, className }: ButtonLink) => {
	return (
		<div className={`text-center py-3.5 ${className}`}>
			<Link
				className="text-base py-3.5 px-20 rounded-3xl border-2 border-black/10 text-center"
				to={link}
			>
				{value}
			</Link>
		</div>
	);
};
