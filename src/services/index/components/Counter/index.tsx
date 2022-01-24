import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateInterface } from "~/services/index/store/interface/RootState";
import { CounterState } from "~/services/index/store/interface";
import ActionCreators from "../../store/actions";

const CounterLayer = () => {
	const { count } = useSelector((state: RootStateInterface): CounterState => state.counter);
	const dispatch = useDispatch();
	const handleClick = (num: number) => {
		if (num === 1) {
			dispatch(ActionCreators.counterIncrement());
		} else if (num === 0) {
			dispatch(ActionCreators.counterDecrement());
		} else if (num === 2) {
			dispatch(ActionCreators.counterReset());
		}
	};
	return (
		<div>
			<div>현재값:{count}</div>
			<div>
				<button onClick={() => handleClick(1)}>+</button>
				<button onClick={() => handleClick(0)}>-</button>
				<button onClick={() => handleClick(2)}>reset</button>
			</div>
		</div>
	);
};

export default CounterLayer;
