import { Link } from "react-router-dom";
import SvgIcon from "../../../features/model/svg-icon/SvgIcon";
import { ROUTES } from "../../../app/Routes/Routes";
import { Logo } from "../../../shared/logo/logo";
import { useCart } from "@/entities/cart/hooks/useCart";
import { useArrays } from "@/shared/arrays/arrayFilter";
import { useState } from "react";

export const Nav = () => {
	const { cart } = useCart();

	const [isActive, setIsActive] = useState<boolean>(false)

	const {styles} = useArrays();

	return (
		<nav className="flex items-center w-full h-12 gap-10">
			<Logo />
			<ul className="flex gap-3 items-center">
				<li className="relative">
					<div
						className={`flex items-center gap-1 p-2  border-t-[1px] border-l-[1px] border-r-[1px]  rounded-t-2xl ${isActive ? "border-black/10" : "border-transparent"}`}
					>
						<Link to={ROUTES.SHOPALL} className="text-black" onClick={()=> setIsActive(false)}>
							Shop
						</Link>
						<SvgIcon
							className="w-4 h-4"
							name="shared-arrow-mini"
							onClick={() => setIsActive((prev) => !prev)}
						/>
					</div>
					{isActive && (
						<div className="flex flex-col gap-1 absolute bg-color-white w-full mt-[36px] p-2 top-0 left-0 border-l-[1px] border-r-[1px] border-b-[1px] rounded-b-2xl border-black/10">
							{styles.map((i) => (
								<Link key={i.id} to={`/${i.name}`} onClick={() => setIsActive( prev => !prev)}>
									{i.name}
								</Link>
							))}
						</div>
					)}
				</li>
				<li className="p-2">On Sale</li>
				<li className="p-2">New Arrivals</li>
				<li className="p-2">Brands</li>
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
				<Link to={ROUTES.CART} className="relative">
					<SvgIcon className="w-7 h-7" name="entities-cart" />
					{cart.Ids.length !== 0 && (
						<span className="bg-red-500 text-white font-bold rounded-2xl w-5 h-5 text-[12px] flex items-center justify-center absolute right-[-5px] top-[-5px]">
							{cart.Ids.length}
						</span>
					)}
				</Link>
				<Link to={ROUTES.PROFILE}>
					<SvgIcon className="w-7 h-7" name="entities-profile" />
				</Link>
			</div>
		</nav>
	);
};
