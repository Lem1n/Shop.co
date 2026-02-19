interface Button {
    onClick: () => void,
    value: string,
    className: string
}
export const Button = ({onClick, value, className}:Button) => {

    return (
        <button className={`font-base rounded-4xl text-white bg-black ${className}`} onClick={onClick}>{value}</button>
    )
}