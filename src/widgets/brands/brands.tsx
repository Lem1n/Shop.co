import SvgIcon from "../../features/svg-icon/SvgIcon";

export const Brands = () => {
	return (
		<section className="bg-black">
			<div className="custom-container ">
				<div className="py-11 flex items-center justify-between">
					<SvgIcon className="max-h-9" name="brands-versace" />
					<SvgIcon className="max-h-9" name="brands-zara" />
					<SvgIcon className="max-h-9" name="brands-gucci" />
					<SvgIcon className="max-h-9" name="brands-prada" />
					<SvgIcon className="max-h-9" name="brands-calvinklein" />
				</div>
			</div>
		</section>
	);
};
