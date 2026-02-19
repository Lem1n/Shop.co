import { Intro } from "../../widgets/home/intro/intro";
import { Brands } from "../../widgets/brands/brands";
import { NewProducts } from "../../widgets/home/new-products/newProducts";
import { TopSelling } from "../../widgets/home/top-selling/topSelling";
import { DressStyle } from "../../widgets/home/dress-style/dress-style";

function Home (){
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
export const Component = Home;