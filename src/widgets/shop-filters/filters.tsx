import { Colors } from "@/features/model/select-colors/Colors";
import { Size } from "@/features/model/select-size/Size";
import SvgIcon from "@/features/model/svg-icon/SvgIcon";
import { useArrays } from "@/shared/arrays/arrayFilter";
import { Button } from "@/shared/buttons/button";
import { HR } from "@/shared/hr-tag/HR";
import { Link } from "react-router-dom";

interface Filters {
	handleFilter: () => void;
	selectColor: string;
	setSelectColor: React.Dispatch<React.SetStateAction<string>>;
	selectSize: string;
	setSelectSize: React.Dispatch<React.SetStateAction<string>>;
}
export const Filters = ({ handleFilter, selectColor, setSelectColor, selectSize, setSelectSize }: Filters) => {
	const { categories, styles, sizes, colors} = useArrays();
	return (
		<div className="border-[1px] border-black/10 rounded-2xl w-[315px]">
			<div className="py-5 px-6 ">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-bold">Filters</h2>
					<SvgIcon
						name="entities-filters"
						className="w-6 h-6 opacity-40"
					/>
				</div>
				<HR />
				<div className="flex flex-col gap-5 items-start">
					{categories.map((i) => (
						<button key={i.id}>{i.name}</button>
					))}
				</div>
				<HR />
				<div>
					<h2 className="text-xl font-bold">Price</h2>
				</div>
				<HR />
				<div>
					<h2 className="text-xl font-bold">Colors</h2>
					<Colors
						data={colors}
						className="flex-wrap"
						selectColor={selectColor}
						setSelectColor={setSelectColor}
					/>
				</div>
				<HR />
				<div>
					<h2 className="text-xl font-bold">Size</h2>
					<Size
						data={sizes}
						className="gap-2 flex-wrap"
						selectSize={selectSize}
						setSelectSize={setSelectSize}
					/>
				</div>
				<div>
					<h2 className="text-xl font-bold">Dress Style</h2>
					<div className="flex flex-col gap-5">
						{styles.map((i) => (
							<Link to={`/shop/${i.name}`} key={i.id}>
								{i.name}
							</Link>
						))}
					</div>
				</div>
				<Button
					value="Apply Filter"
					disabled={selectColor === "" || selectSize === ""}
					className="h-12 w-full"
					onClick={handleFilter}
				/>
			</div>
		</div>
	);
};
