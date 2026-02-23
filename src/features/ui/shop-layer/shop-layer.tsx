import type { PathParams, ROUTES } from "@/app/Routes/Routes";
import { useGetProductsFilterPageQuery } from "@/shared/api/Product.api";
import { HR } from "@/shared/hr-tag/HR";
import { Pagination } from "@/widgets/pagination/pagination";
import { ProductMini } from "@/widgets/product-mini/productMini";
import { Filters } from "@/widgets/shop-filters/filters";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ShopLayer = () => {
	const { items } = useParams<PathParams[typeof ROUTES.ITEMS]>();

	document.title = items ? items : "Shop.co";

	const [state, setState] = useState<string>(
		`&_per_page=9&${items ? `styleId=${items}&` : "_sort=createdAt&"}`,
	);
	// надо фиксить фильтр + новый фильтр !== новый фильтр

	const [content, setContent] = useState<string>(`_page=1${state}`);

	const [selectColor, setSelectColor] = useState<string>("");
	const [selectSize, setSelectSize] = useState<string>("");

	const handleFilter = () => {
		setContent(
			`_page=1${state}size:gt=${selectSize}&colors:gt=${selectColor}`,
		);
		setState ( `${state}size:gt=${selectSize}&colors:gt=${selectColor}`);
	};

	const handlePage = (page: number): void => {
		setContent(`_page=${page}${state}`);
		window.scrollTo(0, 0);
	};
	const { isLoading, data, error } = useGetProductsFilterPageQuery(content);

	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка...</div>;
	if (!data) return <div>Ошибка data...</div>;
	const { first, prev, next, last } = data;

	return (
		<section className="flex gap-5">
			<Filters
				handleFilter={handleFilter}
				selectColor={selectColor}
				selectSize={selectSize}
				setSelectColor={setSelectColor}
				setSelectSize={setSelectSize}
			/>

			<div className="w-full">
				<div className="flex justify-between items-end mb-6">
					<h1 className="text-4xl font-bold">
						{items ? items : "Shop"}
					</h1>
					<div>
						Showing {prev ? prev + first : 0 + first}-{data.pages}{" "}
						of {data.items} Products
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
					<Pagination
						first={first}
						last={last}
						next={next}
						prev={prev}
						handlePage={handlePage}
					/>
			</div>
		</section>
	);
};
