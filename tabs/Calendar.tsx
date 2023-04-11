import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const Calendar = () => {
	return (
		<>
			<Appbar.Header>
				<Appbar.Action
					icon="format-list-bulleted-type"
					onPress={() => {
						console.log("clicked");
					}}
				/>
				<Appbar.Content title="Today" />
				<Appbar.Action
					icon="watch"
					onPress={() => {
						console.log("clicked");
					}}
				/>
			</Appbar.Header>
			<View
				style={[
					styles.container,
					{
						// Try setting `flexDirection` to `"row"`.
						flexDirection: "column",
					},
				]}
			>
				<View style={{ flex: 1, backgroundColor: "red" }} />
				<View style={{ flex: 2, backgroundColor: "darkorange" }} />
				<View style={{ flex: 3, backgroundColor: "green" }} />
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
});

export default Calendar;
