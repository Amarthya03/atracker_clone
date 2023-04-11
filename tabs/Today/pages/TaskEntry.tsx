import { View, Text } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const TaskEntry = () => {
	const navigator = useNavigation();

	return (
		<>
			<Appbar.Header>
				<Appbar.BackAction
					onPress={() => {
						navigator.goBack();
					}}
				/>
				<Appbar.Content title="Task Entry" />
				<Appbar.Action
					icon="plus"
					onPress={() => {
						console.log("Entry added");
					}}
				/>
			</Appbar.Header>
		</>
	);
};

export default TaskEntry;
