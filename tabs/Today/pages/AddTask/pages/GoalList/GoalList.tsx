import { View, Text } from "react-native";
import React from "react";
import { TabScreen, Tabs } from "react-native-paper-tabs";

const GoalList = () => {
	return (
		<Tabs uppercase={false} showTextLabel={true}>
			<TabScreen label="Active">
				<Text>Active</Text>
			</TabScreen>
			<TabScreen label="Historical">
				<Text>Historical</Text>
			</TabScreen>
		</Tabs>
	);
};

export default GoalList;
