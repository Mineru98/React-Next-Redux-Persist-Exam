import { actionTypesCounter } from "../../interface";

export function counterIncrement() {
	return {
		type: actionTypesCounter.COUNTER_INCREMENT,
	};
}
