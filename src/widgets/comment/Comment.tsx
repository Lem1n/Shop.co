import { Stars } from "@/entities/Stars/stars"
import SvgIcon from "@/features/svg-icon/SvgIcon";

interface Comment {
    className: string;
	comment: {
		id: string;
		rating: number;
		name: string;
		text: string;
		createdAt: string;
	};
}

export const Comment = ({ comment, className }: Comment) => {
	return (
		<article
			className={`${className} py-7 px-8 rounded-3xl border-[1px] border-black/10 `}
		>
			<div className="mb-6 flex flex-col gap-3">
				<Stars rating={comment.rating} />
				<div className="flex gap-1 items-center">
					<h3 className="font-bold text-xl">{comment.name}</h3>
					<SvgIcon name="shared-checkbox-green" className="w-6 h-6"/>
				</div>
				<p className="text-black/60">{comment.text}</p>
			</div>
			<time dateTime={comment.createdAt} className="text-black/60">
				Posted on {comment.createdAt}
			</time>
		</article>
	);
};