import { useDispatch } from "react-redux";
import { actions } from "../cart-slice/cart.slice";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

const rootActions = {
	...actions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
