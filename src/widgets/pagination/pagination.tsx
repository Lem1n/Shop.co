import SvgIcon from "@/features/model/svg-icon/SvgIcon";

interface Pagination {
	prev: number | null;
	next: number | null;
	last: number;
	first: number;
    handlePage: (page:number) => void
}

export const Pagination = ({ prev, next, last, first, handlePage }:Pagination) => {
	const currentPage = first + (prev ? prev : 0);

	return (
		<div className="flex items-center justify-between">
			<button
				className="flex items-center gap-3 py-2 px-2.5 border-black/10 border-[1px] rounded-xl disabled:opacity-60"
				disabled={prev === null}
				onClick={() => handlePage(prev ? prev : 1)}
			>
				<SvgIcon
					name="shared-arrow-full"
					className="rotate-180 w-5 h-5"
				/>
				<div className="font-bold text-sm">Previous</div>
			</button>
			<div className="flex items-center gap-[1px]">
				{prev && (
					<button
						className="py-2 px-4"
						onClick={() => handlePage(first)}
					>
						{first}
					</button>
				)}
				{first !== currentPage &&
					first + first !== prev &&
					first !== currentPage - 1 && (
						<span className="py-2 px-4">...</span>
					)}
				{prev !== first && (
					<button
						className="py-2 px-4"
						onClick={() => handlePage(prev ? prev : 1)}
					>
						{prev}
					</button>
				)}
				<button className="py-2 px-4 bg-black/6 rounded-xl">
					{currentPage}
				</button>
				{next !== last && (
					<button
						className="py-2 px-4"
						onClick={() => handlePage(next ? next : 1)}
					>
						{next}
					</button>
				)}
				{last !== currentPage &&
					last - first !== next &&
					last - 1 !== currentPage && (
						<span className="py-2 px-4">...</span>
					)}
				{next && (
					<button
						className="py-2 px-4"
						onClick={() => handlePage(last)}
					>
						{last}
					</button>
				)}
			</div>
			<button
				className="flex items-center gap-3 py-2 px-2.5 border-black/10 border-[1px] rounded-xl disabled:opacity-60"
				disabled={next === null}
				onClick={() => handlePage(next ? next : 1)}
			>
				<div className="font-bold text-sm">Next</div>
				<SvgIcon name="shared-arrow-full" className=" w-5 h-5" />
			</button>
		</div>
	);
};
