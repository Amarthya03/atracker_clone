import { View, Text } from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/counter/counterSlice";

const History = () => {
	const count = useSelector((state: any) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<Appbar.Header>
				<Appbar.Content title="Adder" />
			</Appbar.Header>
			<View>
				<Text>{count}</Text>
				<Button
					onPress={() => {
						dispatch(increment());
					}}
				>
					Increment
				</Button>
				<Button
					onPress={() => {
						dispatch(decrement());
					}}
				>
					Decrement
				</Button>
			</View>
		</>
	);
};

export default History;
