import { DressStyle } from "../../widgets/dress-style/dress-style";
import { Intro } from "../../widgets/intro/intro";
import { Brands } from "../../widgets/brands/brands";
import { NewProducts } from "../../widgets/new-products/newProducts";
import { TopSelling } from "../../widgets/top-selling/topSelling";

export const Home = () => {
	return (
		<>
			<Intro />
			<Brands />
			<NewProducts />
			<div className="custom-container">
				<hr className="my-16 text-black/10" />
			</div>
			<TopSelling />
			<DressStyle />
		</>
	);
};
