import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FAB, List, MD3Colors, TextInput, Text } from "react-native-paper";

const Tasks = () => {
	const [text, setText] = useState("");

	return (
		<View style={{ flex: 2 }}>
			<Text variant="titleMedium">Task</Text>
			<TextInput
				mode="outlined"
				left={<TextInput.Icon icon="magnify" />}
				label="Search tasks"
				value={text}
				onChangeText={(text) => setText(text)}
			/>
			<Text>All Tags</Text>
		</View>
	);
};

export default Tasks;
