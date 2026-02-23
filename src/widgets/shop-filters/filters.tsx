import { Colors } from "@/features/model/select-colors/Colors";
import { Size } from "@/features/model/select-size/Size";
import SvgIcon from "@/features/model/svg-icon/SvgIcon";
import { useArrays } from "@/shared/arrays/arrayFilter";
import { Button } from "@/shared/buttons/button";
import { HR } from "@/shared/hr-tag/HR";
import Slider from "rc-slider";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Filters {
	handleFilter: () => void;
	selectColor: string;
	setSelectColor: React.Dispatch<React.SetStateAction<string>>;
	selectSize: string;
	setSelectSize: React.Dispatch<React.SetStateAction<string>>;
}
export const Filters = ({ handleFilter, selectColor, setSelectColor, selectSize, setSelectSize }: Filters) => {
	const { styles, sizes, colors} = useArrays();
	const [price, setPrice] = useState([0, 100])
	const handleChange = (value:[]) => {
		setPrice(value)
	}
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
				<div>
					<h2 className="text-xl font-bold">Price</h2>
					<div className="price-filter">
						<div>
							от {price[0]} до {price[1]}
						</div>
						<Slider
							range
							min={0}
							max={100}
							value={price}
							onChange={handleChange}
							marks={{ 0: "0", 5000: "5k", 10000: "10k" }}
						/>
					</div>
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
							<Link to={`/${i.name}`} key={i.id}>
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
