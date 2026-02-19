import { useState } from "react";
import type { Product } from "../../../shared/api/types/api.types";
interface ProductPhotos {
	item: Product;
}
interface Photos {
	id: string;
	url: string;
}
export const ProductPhotos = ({ item }: ProductPhotos) => {
	const [usePhoto, setUsePhoto] = useState(`${item.photos[0].url}`);
	const [selectedId, setSelectedId] = useState("");
	const handlePhoto = (photo: Photos) => {
		setUsePhoto(photo.url);
		setSelectedId(photo.id);
	};
	return (
		<div className="flex">
			<div className="flex flex-col gap-3.5 mr-3">
				{item.photos.map((photo) => (
					<div key={photo.id} className="w-[152px] h-[167px]">
						<img
							onClick={() => handlePhoto(photo)}
							className={`${selectedId === photo.id ? "border-2 border-black" : "border-2 border-transparent"} rounded-3xl object-cover w-full h-full `}
							src={photo.url}
							alt="photo"
						/>
					</div>
				))}
			</div>
			<div>
				<div className="w-[444px] h-[530px]">
					<img
						className="rounded-3xl object-cover h-full w-full"
						src={usePhoto}
						alt="photo"
					/>
				</div>
			</div>
		</div>
	);
};
