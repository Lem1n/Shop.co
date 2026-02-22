

export const ROUTES = {
	HOME: "/",
	ITEMS: "/:items",
	
	SHOP: "/shop",
	SHOPALL: "/shop/all",
	PRODUCT: "/shop/:itemId",

	CART: "/cart",
	PROFILE: "/profile",
} as const;


export type PathParams = {
	[ROUTES.PRODUCT]: {
		itemId: string;
	};
	[ROUTES.ITEMS]: {
		items: string;
	};
};

declare module "react-router-dom" {
    interface Register {
        params: PathParams
    }
}

// <Link to{href(ROUTES.ITEM, {id: id})}>ITEM</Link>