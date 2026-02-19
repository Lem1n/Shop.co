import { DressStyleCard } from "../../../features/dress-style/dress-style-card";
import casual from "/public/dress/casual.png";
import formal from "/public/dress/formal.png";
import party from "/public/dress/party.png";
import gym from "/public/dress/gym.png";

export const DressStyle = () => {
	return (
		<section>
			<div className="my-20">
				<div className="custom-container bg-[#F0F0F0] rounded-4xl">
					<div className="pb-19">
						<h1 className="text-5xl font-['Integral-CF-Bold] font-bold uppercase pt-17.5 pb-16 text-center">
							Browse by dress style
						</h1>
						<div className="flex flex-col gap-5">
							<div className="flex gap-5 justify-between">
								<DressStyleCard
									className="w-1/3"
									name="Casual"
									img={casual}
								/>
								<DressStyleCard
									className="w-2/3"
									name="Formal"
									img={formal}
								/>
							</div>
							<div className="flex gap-5 justify-between">
								<DressStyleCard
									className="w-2/3"
									name="Party"
									img={party}
								/>
								<DressStyleCard
									className="w-1/3"
									name="Gym"
									img={gym}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
