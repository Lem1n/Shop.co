import { Routes } from "react-router-dom";
import "./App.css";
import { Header } from "../widgets/header/header";
import { RoutePath } from "./Routes/RoutePath";


function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<RoutePath/>
				</Routes>
			</main>
		</>
	);
}

export default App;
