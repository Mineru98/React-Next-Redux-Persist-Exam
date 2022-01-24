import { actionTypesCounter } from "../../interface";

export function counterReset() {
	return {
		type: actionTypesCounter.COUNTER_RESET,
	};
}
