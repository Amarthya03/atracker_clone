import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const AppbarComponent = () => (
	<Appbar.Header>
		<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
		<Appbar.Action icon="magnify" onPress={() => {}} />
		<Appbar.Content title="Today" />
		<Appbar.Action icon="magnify" onPress={() => {}} />
	</Appbar.Header>
);

export default AppbarComponent;
