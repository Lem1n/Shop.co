import { createBrowserRouter, Link } from "react-router-dom";
import App from "./App";
import { ROUTES } from "./Routes/Routes";
import { ProductCrumb } from "@/features/breadcrumbs/product-crumb/product-crumb";
function HydrateFallback() {
	return (
		<div className="flex items-center justify-center h-screen">
			Загрузка...
		</div>
	);
}

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <App />,
		hydrateFallbackElement: <HydrateFallback />,
		handle: {
			crumb: () => (
				<Link className="opacity-60" to={ROUTES.HOME}>
					Home
				</Link>
			),
		},
		children: [
			{
				index: true,
				lazy: () => import("@/pages/home/home.page"),
			},
			{
				path: "shop",
				handle: {
					crumb: () => (
						<Link className="opacity-60" to={ROUTES.SHOP}>
							Shop
						</Link>
					),
				},
				children: [
					{
						path: ":itemId",
						lazy: () =>
							import("@/pages/product-card/product-card.page"),
						handle: {
							crumb: () => <ProductCrumb />,
						},
					},
				],
			},
			{
				path: "cart",
				lazy: () => import("@/pages/cart/cart.page"),
				handle: {
					crumb: () => (
						<Link className="opacity-60" to={ROUTES.CART}>
							Cart
						</Link>
					),
				},
			},
			{
				path: "profile",
				lazy: () => import("@/pages/profile/profile.page"),
				handle: {
					crumb: () => (
						<Link className="opacity-60" to={ROUTES.PROFILE}>
							Profile
						</Link>
					),
				},
			},
		],
	},
]);


