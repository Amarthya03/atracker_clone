import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const AppbarComponent = () => {
	const navigator = useNavigation();
	return (
		<Appbar.Header>
			<Appbar.Action
				icon="format-list-bulleted-type"
				onPress={() => {
					navigator.navigate("TodayTab", {
						screen: "AddTask",
					});
				}}
			/>
			<Appbar.Content title="Today" />
			<Appbar.Action
				icon="watch"
				onPress={() => {
					navigator.navigate("TodayTab", {
						screen: "TaskEntry",
					});
				}}
			/>
		</Appbar.Header>
	);
};

export default AppbarComponent;
