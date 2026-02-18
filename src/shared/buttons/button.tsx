interface Button {
    onClick: () => void,
    value: string
}
export const Button = ({onClick, value}:Button) => {

    return (
        <button className="font-base py-3.5 px-17 rounded-4xl bg-black" onClick={onClick}>{value}</button>
    )
}