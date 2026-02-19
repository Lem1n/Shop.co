import "./styles/App.css";
import { Header } from "../widgets/header/header";
import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@/features/breadcrumbs/breadcrumbs";
import { FixedHeader } from "@/features/header/fixed-header";
import { Suspense, useEffect } from "react";

function App() {
	useEffect(()=>{
		FixedHeader();
	},[])
	const location = useLocation();

	return (
		<>
			<Header />
			<main
				className={`${location.pathname !== "/" ? "custom-container" : ""}`}
			>
				<Suspense fallback={<div>Загрузка страницы...</div>}>
					<Breadcrumbs />
					<Outlet />
				</Suspense>
			</main>
		</>
	);
}

export default App;
