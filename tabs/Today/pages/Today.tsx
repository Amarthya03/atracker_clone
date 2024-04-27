import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AppbarComponent from "../components/AppbarComponent";
import TodaysOverview from "../components/TodaysOverview";
import CurrentTask from "../components/CurrentTask";
import Tasks from "../components/Tasks";
import { FAB, List, MD3Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Today = () => {
	const navigator = useNavigation();

	return (
		<>
			<AppbarComponent />
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					padding: 20,
				}}
			>
				<TodaysOverview />
				<CurrentTask />
				<Tasks />
				<ScrollView
					style={{
						flex: 3,
					}}
				>
					<List.Section>
						<List.Item
							title="First Item"
							left={() => <List.Icon icon="folder" />}
						/>
						<List.Item
							title="Second Item"
							left={() => (
								<List.Icon
									color={MD3Colors.tertiary70}
									icon="folder"
								/>
							)}
						/>
					</List.Section>
				</ScrollView>
				<FAB
					size="small"
					icon="plus"
					style={styles.fab}
					label="Create Task"
					onPress={() => {
						navigator.navigate("TodayTab", {
							screen: "CreateTask",
						});
					}}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	fab: {
		position: "relative",
		width: 200,
		margin: 0,
		left: 100,
		alignItems: "center",
	},
});

export default Today;
