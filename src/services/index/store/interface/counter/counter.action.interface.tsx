export enum actionTypesCounter {
	COUNTER_INCREMENT = "COUNTER_INCREMENT", // 숫자 + 1
	COUNTER_DECREMENT = "COUNTER_DECREMENT", // 숫자 - 1
	COUNTER_RESET = "COUNTER_RESET", // 초기화
}

export type ActionsCounter = CounterIncrement | CounterDecrement | CounterReset;

export interface CounterIncrement {
	type: actionTypesCounter.COUNTER_INCREMENT;
}

export interface CounterDecrement {
	type: actionTypesCounter.COUNTER_DECREMENT;
}

export interface CounterReset {
	type: actionTypesCounter.COUNTER_RESET;
}
