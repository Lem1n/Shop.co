import { Link } from "react-router-dom"

 
 interface DressStyleCard {
    name: string,
    img: string,
	className: string
 }
 
 export const DressStyleCard = ({className, name, img }: DressStyleCard) => {
		return (
			<div className={`h-72 rounded-3xl bg-white relative ${className}`}>
				<Link to={`/shop/${name}`}>
					<div className="top-6 left-9 text-4xl font-bold absolute">
						{name}
					</div>
					<div className="flex justify-end h-full">
						<img
							className="object-cover rounded-3xl"
							src={img}
							alt={name}
						/>
					</div>
				</Link>
			</div>
		);
 };