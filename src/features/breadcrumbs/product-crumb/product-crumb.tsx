// ProductCrumb.tsx
import { useGetProductQuery } from "@/shared/api/Product.api";
import { useParams } from "react-router-dom";


export const ProductCrumb = () => {
	const { itemId } = useParams<"itemId">();
	const { data: product } = useGetProductQuery(itemId!, {
		skip: !itemId,
	});

	if (!product) return <span>Product</span>;

	return <span className="opacity-100">{product.name}</span>;
};
