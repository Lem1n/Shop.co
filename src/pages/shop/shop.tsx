import { Link } from "react-router-dom";
import { ROUTES } from "../../app/Routes/Routes";


export const Shop = () => {
    
  return (
		<section>
			<div className="custom-container">
				<ul>
					<li>
						<Link to={ROUTES.HOME}>Home</Link>
					</li>
					<li>Cart</li>
				</ul>
			</div>
		</section>
  );
}