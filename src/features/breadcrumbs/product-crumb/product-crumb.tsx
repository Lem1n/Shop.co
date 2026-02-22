// ProductCrumb.tsx
import { useGetProductQuery } from "@/shared/api/Product.api";
import { useParams } from "react-router-dom";


export const ProductCrumb = () => {
	const { itemId, items} = useParams();
	const { data: product } = useGetProductQuery(itemId!, {
		skip: !itemId,
	});

	if (!product) return <span className="opacity-100">{items}</span>;

	return <span className="opacity-100">{product.name}</span>;
};
