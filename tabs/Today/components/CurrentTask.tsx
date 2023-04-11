import { View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";

const CurrentTask = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text variant="headlineLarge">CurrentTask</Text>
			<Text>No task running</Text>
		</View>
	);
};

export default CurrentTask;
