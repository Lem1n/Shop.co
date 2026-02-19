
export const FixedHeader = () => {
    const Header = document.querySelector('header')
    addEventListener('scroll', () => {
        if (window.pageYOffset > 160) {
            Header?.classList.add("sticky", "top-0", "w-full", "border-[1px]", "border-black/10");
        } else {
            Header?.classList.remove("sticky", "top-0", "w-full", "border-[1px]", "border-black/10");
        }
    })
}