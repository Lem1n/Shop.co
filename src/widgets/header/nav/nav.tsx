import { Link } from "react-router-dom";
import SvgIcon from "../../../features/svg-icon/SvgIcon";
import { ROUTES } from "../../../app/Routes/Routes";
import { Logo } from "../../../shared/logo/logo";

export const Nav = () => {
	return (
		<nav className="flex items-center w-full h-12 gap-10">
			<Logo />
			<ul className="flex gap-6 items-center">
				<li className="flex items-center gap-1">
					<Link to={ROUTES.SHOP} className="text-black">
						Shop
					</Link>
					<SvgIcon className="w-4 h-4" name="shared-arrow-mini" />
				</li>
				<li>On Sale</li>
				<li>New Arrivals</li>
				<li>Brands</li>
			</ul>
			<div className="relative w-full">
				<SvgIcon
					name="shared-search"
					className="absolute top-1/2 translate-y-[-50%] opacity-40 left-4 w-4 h-4"
				/>
				<input
					placeholder="Search for products..."
					type="search"
					className="w-full h-full rounded-4xl py-3 pl-13 pr-4 bg-[#f0f0f0]"
				/>
			</div>
			<div className="flex gap-3.5 items-center">
				<Link to={ROUTES.CART}>
					<SvgIcon className="w-6 h-6" name="entities-cart" />
				</Link>
				<Link to={ROUTES.PROFILE}>
					<SvgIcon className="w-6 h-6" name="entities-profile" />
				</Link>
			</div>
		</nav>
	);
};
