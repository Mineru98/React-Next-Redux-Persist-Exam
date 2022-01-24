import * as counterIncrementAction from "./counter/counterIncrementAction";
import * as counterDecrementAction from "./counter/counterDecrementAction";
import * as counterResetAction from "./counter/counterResetAction";

const ActionCreators = {
	...counterIncrementAction,
	...counterDecrementAction,
	...counterResetAction,
};
export default ActionCreators;
