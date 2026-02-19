import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ROUTES } from "./Routes/Routes";

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: ROUTES.SHOP,
				lazy: () => import("@/pages/shop/shop.page"),
			},
			{
				path: ROUTES.PRODUCT,
				lazy: () => import("@/pages/product-card/product-card.page"),
			},
			{
				path: ROUTES.CART,
				lazy: () => import("@/pages/cart/cart.page"),
			},
			{
				path: ROUTES.HOME,
				lazy: () => import("@/pages/home/home.page"),
			}
		],
	},
]);

