import { actionTypesCounter } from "../../interface";

export function counterDecrement() {
	return {
		type: actionTypesCounter.COUNTER_DECREMENT,
	};
}
