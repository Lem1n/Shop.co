import type { Product } from "@/shared/api/types/api.types";
import { Comment } from "@/widgets/comment/Comment";
import { useCallback, useMemo, useState } from "react";

interface ProductComments {
	item: Product | null;
}
export const ProductComments = ({ item }: ProductComments) => {
	if (item === null) return <div>Комментариев нет!</div>;

	const { comments } = item;

	const options = ["Rating +", "Rating -"];
	const [option, setOption] = useState<string>("");


	const commentsFiltered = useMemo(() => {
		const sorted = [...comments];
		if (option === "Rating +") {
			sorted.sort((a, b) => b.rating - a.rating);
		} else if(option === "Rating -") {
			sorted.sort((a, b) => a.rating - b.rating); 
		}
		return sorted;
	}, [option, comments]);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setOption(e.target.value);
		},
		[],
	);

	return (
		<div>
			<div className="flex items-center justify-between">
				<div className="flex gap-2 items-center">
					<div className="text-2xl font-bold">All Reviews</div>
					<span className="text-black/60">({comments.length})</span>
				</div>
				<select
					value={option}
					onChange={handleChange}
					className="py-3 px-5 bg-[#f0f0f0] rounded-3xl focus:rounded-none"
				>
					{options.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
				<div className="grid gap-5 grid-cols-2">
					{commentsFiltered.map((i) => (
						<Comment
							key={i.id}
							comment={i}
							className="w-full"
						/>
					))}
				</div>
		</div>
	);
};
