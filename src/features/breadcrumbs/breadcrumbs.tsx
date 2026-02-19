// Breadcrumbs.tsx
import {useLocation, useMatches } from "react-router-dom";
import SvgIcon from "../svg-icon/SvgIcon";

export const Breadcrumbs = () => {
	const matches = useMatches();
	const location = useLocation();

	if (location.pathname === '/') return

	const crumbs = matches
		.filter((match) => Boolean((match.handle as any)?.crumb))
		.map((match) => {
			const handle = match.handle as {
				crumb: (data: unknown) => React.ReactNode;
			};
			return handle.crumb(match.data);
		});
	if (!crumbs.length) return null;

	return (
		<div>
			<hr className="text-black/10 mb-6" />
			<nav aria-label="breadcrumbs">
				<ul className="flex items-center gap-3 mb-9">
					{crumbs.map((crumb, index) => (
						<li key={index} className="flex items-center gap-1">
							{crumb}
							{index < crumbs.length - 1 && (
								<SvgIcon
									name="shared-arrow-mini"
									className="rotate-270 w-4 h-4 opacity-40"
								/>
							)}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
