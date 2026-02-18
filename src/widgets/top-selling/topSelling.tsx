import { ProductMini } from "../../entities/product-mini/productMini";
import { useGetProductsFilterPageQuery } from "../../shared/api/Product.api";
import { ButtonLink } from "../../shared/buttons/buttonLink";

export const TopSelling = () => {
	const { data, isLoading, error } = useGetProductsFilterPageQuery(
		"_page=5&_per_page=4",
	);

	// вызвать рандомные объекты с _page=4 / по кнопке перейти на страницу с полными данными
	return (
		<section>
			<div className="custom-container">
				<h2 className="uppercase text-5xl text-center font-extrabold mt-18 mb-14.5">
					Top selling
				</h2>
				<div className="flex items-top gap-5">
					{isLoading ? (
						<div>Загрузка...</div>
					) : error ? (
						<div>Ошибка!</div>
					) : !data?.data ? (
						<div>Ошибка data..</div>
					) : (
						data.data.map((i) => (
							<ProductMini item={i} key={i.id} />
						))
					)}
				</div>
				<ButtonLink className="mt-19" link="" value="View All" />
			</div>
		</section>
	);
};
