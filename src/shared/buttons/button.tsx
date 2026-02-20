interface Button {
    onClick?: () => void,
    value: string,
    className: string,
    disabled?: boolean | undefined,
    type?: "button" | "submit" | "reset" | undefined,
}
export const Button = ({ onClick, value, className, disabled, type }: Button) => {
	return (
		<button
			disabled={disabled}
            type={type}
			className={`font-base rounded-4xl text-white bg-black ${className}`}
			onClick={onClick}
		>
			{value}
		</button>
	);
};