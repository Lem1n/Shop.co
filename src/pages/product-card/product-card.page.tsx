import { useParams } from "react-router-dom";
import { type PathParams, ROUTES } from "../../app/Routes/Routes";
import { useGetProductQuery } from "../../shared/api/Product.api";
import { ProductPhotos } from "../../widgets/product-card/product-photos/product-photos";
import { ProductInfo } from "../../widgets/product-card/product-info/product-info";
import { ProductComments } from "@/widgets/product-card/product-bottom/comments/comments";
import { useState, type JSX } from "react";

interface Tabs {
	id: number;
	label: string;
	content: JSX.Element;
}

function ProductCard() {
	const { itemId } = useParams<PathParams[typeof ROUTES.PRODUCT]>();
	const { data, isLoading, error } = useGetProductQuery(`${itemId}`);
	const tabs: Tabs[] = [
		{
			id: 1,
			label: "Product Details",
			content: <ProductComments item={data ? data : null} />,
		},
		{
			id: 2,
			label: "Rating & Reviews",
			content: <ProductComments item={data ? data : null} />,
		},
		{
			id: 3,
			label: "FAQs",
			content: (
				<div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Dolores at aperiam facere, quibusdam molestias corporis
					necessitatibus. Natus eos voluptatum minima perferendis odit
					ipsa, excepturi culpa magnam suscipit aperiam autem ab!
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Dolores at aperiam facere, quibusdam molestias corporis
					necessitatibus. Natus eos voluptatum minima perferendis odit
					ipsa, excepturi culpa magnam suscipit aperiam autem ab!
				</div>
			),
		},
	];
	const [activeTab, setActiveTab] = useState(tabs[1].id);
		if (isLoading) return <div>Загрузка...</div>;
		if (error) return <div>Ошибка...</div>;
		if (!data) return <div>Ошибка data...</div>;
	return (
		<div>
			<section>
				<article className="flex gap-10 my-">
					<ProductPhotos item={data} />
					<ProductInfo item={data} />
				</article>
			</section>
			<section>
				<ul className="flex justify-around mt-20 mb-15">
					{tabs.map((i) => (
						<li
							key={i.id}
							className={`${i.id === activeTab ? "border-b-[2px] border-black" : "border-b-[1px] border-black/10"} pb-6 text-center w-full`}
						>
							<button
								className="text-xl"
								onClick={() => setActiveTab(i.id)}
							>
								{i.label}
							</button>
						</li>
					))}
				</ul>
				<div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
			</section>
		</div>
	);
}

export const Component = ProductCard;
