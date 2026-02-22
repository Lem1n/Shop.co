import type { PathParams, ROUTES } from "@/app/Routes/Routes";
import { useGetProductsFilterPageQuery } from "@/shared/api/Product.api";
import { HR } from "@/shared/hr-tag/HR";
import { ProductMini } from "@/widgets/product-mini/productMini";
import { Filters } from "@/widgets/shop-filters/filters";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ShopLayer = () => {
	const { items } = useParams<PathParams[typeof ROUTES.ITEMS]>();

	const initialState = `_page=1&_per_page=10&${items ? `styleId=${items}&` : "_sort=createdAt&"}`;

	const [content, setContent] = useState<string>(initialState);

	const [selectColor, setSelectColor] = useState<string>("");
	const [selectSize, setSelectSize] = useState<string>("");

	const handleFilter = () => {
		setContent(
			`${initialState}size:gt=${selectSize}&colors:gt=${selectColor}`,
		);
		console.log(content)
	};
	console.log(content)
	const { isLoading, data, error } = useGetProductsFilterPageQuery(content);

	return (
		<section className="flex gap-5">
			<Filters
				handleFilter={handleFilter}
				selectColor={selectColor}
				selectSize={selectSize}
				setSelectColor={setSelectColor}
				setSelectSize={setSelectSize}
			/>
			{isLoading ? (
				<div>Загрузка...</div>
			) : error ? (
				<div>Ошибка...</div>
			) : !data ? (
				<div>Ошибка data...</div>
			) : (
				<div className="w-full">
					<div className="flex justify-between items-end mb-6">
						<h1 className="text-4xl font-bold">
							{items ? items : "Shop"}
						</h1>
						<div>
							Showing {data.prev ? data.prev : 0 + data.first}-
							{data.pages} of {data.items} Products
						</div>
					</div>
					<div className="grid grid-cols-3 gap-5">
						{data.data.map((i) => (
							<div className="mb-4" key={i.id}>
								<ProductMini item={i} />
							</div>
						))}
					</div>
					<HR />
					<div className="flex items-center justify-between">
						<div>Previous</div>
						<div>pages</div>
						<div>Next</div>
					</div>
				</div>
			)}
		</section>
	);
};
