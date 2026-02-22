
interface HandleAmount {
	amount: number;
	changeAmountPlus: () => void;
	changeAmountMinus: () => void;
	className: string;
}
export const HandleAmount = ({
	amount,
	changeAmountPlus, changeAmountMinus,
	className,
}: HandleAmount) => {
	return (
		<div
			className={`${className} flex items-center justify-between bg-black/10 rounded-4xl`}
		>
			<button
				type="button"
				disabled={amount === 1}
				onClick={changeAmountMinus}
				className="w-5 h-5 relative after:content-[''] after:bg-black after:rounded-[1px] after:h-[2px] after:w-5 after:absolute after:top-1/2 after:left-0 after:translate-y-[-50%]"
			></button>
			<span>{amount}</span>
			<button
				type="button"
                disabled={amount === 10}
				onClick={changeAmountPlus}
				className="w-5 h-5 relative after:content-[''] after:bg-black after:rounded-[1px] after:h-[2px] after:w-5 after:absolute after:top-1/2 after:left-0 after:translate-y-[-50%] before:bg-black before:rounded-[1px] before:w-[2px] before:h-5 before:absolute before:top-0 before:left-1/2 before:translate-x-[-50%]"
			></button>
		</div>
	);
};
