import { Link } from "react-router-dom";
import intro from "/public/intro/intro.png";

export const Intro = () => {
	return (
		<section>
			<div className="bg-[#F2F0F1]">
				<div className="custom-container flex justify-between">
					<div className="w-1/2 flex flex-col justify-center">
						<div className="">
							<h1 className=" text-6xl font-bold">
								Find clothes that matches your style
							</h1>
							<p className="text-black/60 my-8">
								Browse through our diverse range of meticulously
								crafted garments, designed to bring out your
								individuality and cater to your sense of style
							</p>
						</div>
						<div>
							<Link
								className="text-white bg-black rounded-4xl py-3.5 px-17"
								to={`/shop/item/29184756`}
							>
								Shop Now
							</Link>
						</div>
						<div className="mt-12 flex justify-between">
							<div>
								<h2 className="text-4xl font-bold">200+</h2>
								<p className="text-black/60">
									International Brands
								</p>
							</div>
							<div className="border-r-[1px] border-l-[1px] border-black/10 px-8">
								<h2 className="text-4xl font-bold">2,000+</h2>
								<p className="text-black/60">
									High-Quality Products
								</p>
							</div>
							<div>
								<h2 className="text-4xl font-bold">30,000+</h2>
								<p className="text-black/60">Happy Customers</p>
							</div>
						</div>
					</div>
					<div className="w-1/2">
						<img src={intro} alt="intro" />
					</div>
				</div>
			</div>
		</section>
	);
};
