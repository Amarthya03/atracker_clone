import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import Settings from "../pages/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import Today from "../pages/Today/Today";
import Calendar from "../pages/Calendar";
import History from "../pages/History";
import Report from "../pages/Report";
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
			<Tab.Screen
				name="Today"
				component={Today}
				options={{
					tabBarLabel: "Today",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons name="time" size={size} color={color} />
						);
					},
				}}
			/>
			<Tab.Screen
				name="Calendar"
				component={Calendar}
				options={{
					tabBarLabel: "Calendar",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons
								name="calendar"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="History"
				component={History}
				options={{
					tabBarLabel: "History",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons name="list" size={size} color={color} />
						);
					},
				}}
			/>
			<Tab.Screen
				name="Report"
				component={Report}
				options={{
					tabBarLabel: "Report",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons
								name="pie-chart"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{
					tabBarLabel: "Settings",
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons
								name="settings"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomNavbar;
