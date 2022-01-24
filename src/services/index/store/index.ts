import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer, { persistedReducer } from "~/services/index/store/reducer";

const logger = createLogger();
const enhancer = compose(composeWithDevTools(applyMiddleware(logger)));
const makeConfiguredStore = (reducer: any) => createStore(reducer, enhancer);

const makeStore = () => {
	const isServer = typeof window === "undefined";

	if (isServer) {
		return makeConfiguredStore(rootReducer);
	} else {
		// we need it only on client side
		const store = makeConfiguredStore(persistedReducer);
		const persistor = persistStore(store);
		return { persistor, ...store };
	}
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
