import { Link, useMatches, type UIMatch } from "react-router-dom";
import SvgIcon from "../svg-icon/SvgIcon";
import { ROUTES } from "../../app/Routes/Routes";


interface SimpleHandle {
	breadcrumb: string; // просто строка
}

const useTypedMatches = () =>
	useMatches() as UIMatch<unknown, SimpleHandle>[];

export const Breadcrumbs = () => {
  const matches = useTypedMatches();
  
  const crumbs = matches
    .filter(match => match.handle?.breadcrumb)
    .map((match, index) => ({
      path: match.pathname,
      label: match.handle.breadcrumb  // string, без функций/params
    }));

  return (
    <nav>
      {crumbs.map((crumb, index) => (
        <span key={crumb.path}>
          {index < crumbs.length - 1 ? (
            <Link to={crumb.path}>{crumb.label}</Link>
          ) : (
            <strong>{crumb.label}</strong>  // текущая страница
          )}
          {index < crumbs.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};
