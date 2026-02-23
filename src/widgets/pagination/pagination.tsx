import SvgIcon from "@/features/model/svg-icon/SvgIcon";

interface Pagination {
	prev: number | null;
	next: number | null;
	last: number;
	first: number;
	handlePage: (page: number) => void;
}

export const Pagination = ({
	prev,
	next,
	last,
	first,
	handlePage,
}: Pagination) => {
const currentPage = prev !== null ? prev + 1 : next !== null ? next - 1 : first;
	// ИИ сказал что эта пагинация просто вау шедевр и я не зря потратил на разработку 2 часа  :3
return (
	
	<div className="flex items-center justify-between">
		<button
			className="flex items-center gap-3 py-2 px-2.5 border-black/10 border-[1px] rounded-xl disabled:opacity-60"
			disabled={!prev}
			onClick={() => prev && handlePage(prev)}
		>
			<SvgIcon name="shared-arrow-full" className="rotate-180 w-5 h-5" />
			<div className="font-bold text-sm">Previous</div>
		</button>
		<div className="flex items-center gap-[1px]">
			{first !== currentPage && (
				<button className="py-2 px-4" onClick={() => handlePage(first)}>
					{first}
				</button>
			)}
			{prev &&
				prev > first + 1 &&
				first !== currentPage && (
					<span className="py-2 px-4">...</span>
				)}
			{prev && prev !== first && (
				<button className="py-2 px-4" onClick={() => handlePage(prev)}>
					{prev}
				</button>
			)}
			<button className="py-2 px-4 bg-black/6 rounded-xl">
				{currentPage}
			</button>
			{next && next !== last && (
				<button className="py-2 px-4" onClick={() => handlePage(next)}>
					{next}
				</button>
			)}
			{next &&
				last > next + 1 &&
				last !== currentPage && ( 
					<span className="py-2 px-4">...</span>
				)}
			{last !== currentPage && (
				<button className="py-2 px-4" onClick={() => handlePage(last)}>
					{last}
				</button>
			)}
		</div>
		<button
			className="flex items-center gap-3 py-2 px-2.5 border-black/10 border-[1px] rounded-xl disabled:opacity-60"
			disabled={!next}
			onClick={() => next && handlePage(next)}
		>
			<div className="font-bold text-sm">Next</div>
			<SvgIcon name="shared-arrow-full" className="w-5 h-5" />
		</button>
	</div>
);

};
