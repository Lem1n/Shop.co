import { Link } from "react-router-dom"
import { ROUTES } from "../../app/Routes/Routes"


export const Logo = () => {
  return (
    <Link to={ROUTES.HOME} className="uppercase font-[Integral-CF-Bold] text-3xl font-bold">Shop.co</Link>
  )
}