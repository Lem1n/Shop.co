import type { FC, SVGProps } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
	name: string;
	prefix?: string;
	color?: string;
}

const SvgIcon: FC<SvgIconProps> = ({
	name,
	prefix = "icon",
	color = "currentColor",
	...props
}) => {
	const symbolId = `#${prefix}-${name}`;
	return (
		<svg {...props} aria-hidden="true">
			<use href={symbolId} fill={color} />
		</svg>
	);
};

export default SvgIcon;
