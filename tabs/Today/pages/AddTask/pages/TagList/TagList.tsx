import { View, Text } from "react-native";
import React from "react";
import { TabScreen, Tabs } from "react-native-paper-tabs";

const TagList = () => {
	return (
		<Tabs uppercase={false} showTextLabel={true}>
			<TabScreen label="All">
				<Text>All</Text>
			</TabScreen>
			<TabScreen label="Numeric">
				<Text>Numeric</Text>
			</TabScreen>
			<TabScreen label="Dropdown">
				<Text>Dropdown</Text>
			</TabScreen>
		</Tabs>
	);
};

export default TagList;
