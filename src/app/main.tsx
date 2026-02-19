import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/colors.css";
import "virtual:svg-icons-register";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { router } from "./router.tsx";

createRoot(document.getElementById("wrapper")!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
);
