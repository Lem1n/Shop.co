interface Price {
    newP: number,
    oldP: number
}

export const calcPercent = ({newP, oldP}:Price):number => {
    let percent = 0;
    percent =+ Math.round(newP/oldP * 100)
    return percent
}