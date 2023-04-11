import { View, Text } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AddTask = () => {
	const navigator = useNavigation();

	return (
		<>
			<Appbar.Header>
				<Appbar.BackAction
					onPress={() => {
						navigator.goBack();
					}}
				/>
			</Appbar.Header>
		</>
	);
};

export default AddTask;
