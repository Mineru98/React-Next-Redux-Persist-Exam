import { combineReducers, Reducer, AnyAction } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { RootStateInterface } from "~/services/index/store/interface/RootState";
import counter from "~/services/index/store/reducer/counter";

const rootReducer: Reducer<RootStateInterface, AnyAction> = combineReducers<RootStateInterface>({
	counter,
});

const persistConfig = {
	key: "root",
	storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
