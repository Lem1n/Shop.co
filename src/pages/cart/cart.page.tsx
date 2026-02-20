import { useCart } from "@/entities/cart/hooks/useCart";
import { Button } from "@/shared/buttons/button";
import { useItemsReducers } from "@/shared/hooks/useItemsReducers";
import { ProductCart } from "@/widgets/product-cart/product-cart";
import { HR } from "@/shared/hr-tag/HR";
function Cart() {
	const { cart } = useCart();
	const { itemsOldPrice, itemsTotalPrice, Discount, percent } = useItemsReducers();

	return (
		<section>
			<h1 className="mb-6 text-5xl font-bold">Your cart</h1>
			<div className="flex gap-5">
				<div className="w-3/5">
					<div
						className={`${cart.Ids.length === 0 ? "h-150" : ""} w-full py-5 px-6 border-[1px] border-black/10 rounded-3xl`}
					>
						{cart.Ids.length === 0 ? (
							<div className="text-2xl">Пусто...</div>
						) : (
							cart.Ids.map((i, index) => (
								<div key={cart.cart[i].id}>
									<ProductCart item={cart.cart[i]} />
									{cart.Ids.length !== index + 1 && <HR />}
								</div>
							))
						)}
					</div>
				</div>
				<div className="w-2/5">
					<div className="w-full py-5 px-6 border-black/10 border-[1px] rounded-3xl">
						<h2 className="text-2xl font-bold mb-6">
							Order Summary
						</h2>
						<form>
							<div className="flex flex-col gap-5 text-xl">
								<div className="flex justify-between items-center">
									<p className="text-black/60">Subtotal</p>
									<span>${itemsOldPrice}</span>
								</div>
								<div className="flex justify-between items-center">
									<p className="text-black/60">
										Discount ({percent ? percent : "0"}%)
									</p>
									<span className="text-red-600">
										-${Discount}
									</span>
								</div>
								<div className="flex justify-between items-center">
									<p className="text-black/60">Delvery Fee</p>
									<span>$15</span>
								</div>
							</div>
							<hr className="text-black/10 my-5" />

							<div className="flex justify-between items-center">
								<p>Total</p>
								<span>${itemsTotalPrice}</span>
							</div>

							<div className="flex gap-3 h-12 my-6">
								<input
									type="text"
									placeholder="Add promo code"
									className="w-11/15 bg-[#f0f0f0] py-3 px-3.5 text-black/60 focus:text-black rounded-3xl"
								/>
								<Button
									value="Apply"
									className="w-4/15"
								/>
							</div>
							<Button
								value="Go to checkout"
								type="submit"
								className="w-full h-15"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export const Component = Cart;
