import { Route } from "react-router-dom";
import { Home } from "../../pages/home/home";
import { ROUTES } from "./../Routes/Routes";
import { Shop } from "../../pages/shop/shop";
import { ProductCard } from "../../pages/product-card/product-card";
import { Cart } from "../../pages/cart/cart";

export const RoutePath = () => {

  return (
		<>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.SHOP} element={<Shop />} />
			<Route path={ROUTES.PRODUCT} element={<ProductCard />} />
			<Route path={ROUTES.CASUAL} element={<ProductCard />} />
			<Route path={ROUTES.FORMAL} element={<ProductCard />} />
			<Route path={ROUTES.PARTY} element={<ProductCard />} />
			<Route path={ROUTES.GYM} element={<ProductCard />} />
			<Route path={ROUTES.CART} element={<Cart />} />
			<Route path={ROUTES.PROFILE} element={<Home />} />
		</>
  );
}