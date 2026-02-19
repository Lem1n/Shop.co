import z from "zod";

const productDtoSchema = z.object({
	id: z.string(),
	styleId: z.number(),
	categoryId: z.number(),
	author: z.string(),
	name: z.string(),
	description: z.string(),
	price: z.object({
		new: z.number(),
		old: z.number(),
	}),
	rating: z.number().max(5),
	colors: z.array(z.string()),
	createdAt: z.string(),
	size: z.array(z.string()),
	photos: z.array(z.object({ id: z.string(), url: z.string() })),
	comments: z.array(
		z.object({
			id: z.string(),
			rating: z.number(),
			name: z.string(),
			text: z.string(),
			createdAt: z.string(),
		}),
	),
});

const productPageDtoSchema = z.object({
	first: z.number(),
	prev: z.union([z.number(), z.null()]).nullable(),
	next: z.union([z.number(), z.null()]).nullable(),
	last: z.number(),
	pages: z.number(),
	items: z.number(),
	data: z.array(productDtoSchema),
});

export const productSchema = productDtoSchema;
export const productPageSchema = productPageDtoSchema;

export const productListSchema = z.array(productDtoSchema);

export type ProductPage = z.infer<typeof productPageDtoSchema>;
export type Product = z.infer<typeof productDtoSchema>;

type productId = string;
export interface IProducts {
	Products: Record<productId, Product | undefined>;
	Ids: productId;
}
