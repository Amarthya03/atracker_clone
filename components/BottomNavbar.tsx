import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Routes } from "./Routes";
const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={({ navigation, state, descriptors, insets }) => (
				<BottomNavigation.Bar
					navigationState={state}
					safeAreaInsets={insets}
					onTabPress={({ route, preventDefault }) => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						});

						if (event.defaultPrevented) {
							preventDefault();
						} else {
							navigation.dispatch({
								...CommonActions.navigate(
									route.name,
									route.params
								),
								target: state.key,
							});
						}
					}}
					renderIcon={({ route, focused, color }) => {
						const { options } = descriptors[route.key];
						if (options.tabBarIcon) {
							return options.tabBarIcon({
								focused,
								color,
								size: 24,
							});
						}
						return null;
					}}
					getLabelText={({ route }: any) => {
						const { options } = descriptors[route.key];
						const label =
							options.tabBarLabel !== undefined
								? options.tabBarLabel
								: options.title !== undefined
								? options.title
								: route.name;

						return label;
					}}
				/>
			)}
		>
			{Routes.map((route) => (
				<Tab.Screen
					key={route.name}
					name={route.name}
					component={route.component}
					options={{
						tabBarLabel: `${route.label}`,
						tabBarIcon: ({ color, size }) => {
							return (
								<Ionicons
									name={route.icon.toString() as any}
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
			))}
		</Tab.Navigator>
	);
};

export default BottomNavbar;
