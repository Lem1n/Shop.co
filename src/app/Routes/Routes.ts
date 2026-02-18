

export const ROUTES = {
	HOME: "/",

	SHOP: "/shop",
	CASUAL: "/shop/casual",
	FORMAL: "/shop/formal",
	PARTY: "/shop/party",
	GYM: "/shop/gym",
	PRODUCT: "/shop/:itemId",

	CART: "/cart",
	PROFILE: "/profile",
} as const;


export type PathParams = {
    [ROUTES.PRODUCT]: {
        itemId: string
    }
}

declare module "react-router-dom" {
    interface Register {
        params: PathParams
    }
}

// <Link to{href(ROUTES.ITEM, {id: id})}>ITEM</Link>