import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "virtual:svg-icons-register";
import { BrowserRouter} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

createRoot(document.getElementById("wrapper")!).render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>,
);
