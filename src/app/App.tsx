import "./styles/App.css";
import { Header } from "../widgets/header/header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
