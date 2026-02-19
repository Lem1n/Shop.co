import { Link, useParams } from "react-router-dom";
import {type PathParams, ROUTES } from "../../app/Routes/Routes";
import { useGetProductQuery } from "../../shared/api/Product.api";
import SvgIcon from "../../features/svg-icon/SvgIcon";
import { ProductPhotos } from "../../widgets/product-card/product-photos/product-photos";
import { ProductInfo } from "../../widgets/product-card/product-info/product-info";
import { HR } from "../../shared/hr-tag/HR";
import { Breadcrumbs } from "../../features/breadcrumbs/breadcrumbs";

function ProductCard () {
	const { itemId } = useParams<PathParams[typeof ROUTES.PRODUCT]>();
	const { data, isLoading, error } = useGetProductQuery(`${itemId}`);

	return (
		<div className="custom-container">
			<HR/>
			{isLoading ? (
				<div>Загрузка...</div>
			) : error ? (
				<div>Ошибка..</div>
			) : !data ? (
				<div>Ошибка data...</div>
			) : (
				<>
					<ul className="flex items-center gap-3">
						<li className="flex items-center gap-1">
							<Link to={ROUTES.HOME}>Home</Link>
							<SvgIcon
								className="rotate-270 w-4 h-4"
								name="shared-arrow-mini"
							/>
						</li>
						<li className="flex items-center gap-1">
							<Link to={ROUTES.SHOP}>Shop</Link>
							<SvgIcon
								className="rotate-270 w-4 h-4"
								name="shared-arrow-mini"
							/>
						</li>
						<li>{data.name}</li>
						<Breadcrumbs />
					</ul>
					<section>
						<div className="flex gap-10 my-">
							<ProductPhotos item={data} />
							<ProductInfo item={data} />
						</div>
					</section>
					<section>
							<ul className="flex justify-around">
								<li><button className="w-1/3 text-xl">Product Details</button></li>
								<li><button className="w-1/3 text-xl">Rating & Reviews</button></li>
								<li><button className="w-1/3 text-xl">FAQs</button></li>
							</ul>
							<HR/>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
					</section>
				</>
			)}
		</div>
	);
};

export const Component = ProductCard;