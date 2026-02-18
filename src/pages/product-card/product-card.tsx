import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../../app/Routes/Routes";
import { useGetProductQuery } from "../../shared/api/Product.api";
import SvgIcon from "../../features/svg-icon/SvgIcon";


export const ProductCard = () => {

  const {itemId} = useParams()

  const {data, isLoading, error} = useGetProductQuery(`${itemId}`)

  return (
		<section>
			<div className="custom-container">
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
						</ul>
						<div>
							
						</div>
					</>
				)}
			</div>
		</section>
  );
}