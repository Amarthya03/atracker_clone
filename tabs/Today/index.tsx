import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Today from "./pages/Today";
import AddTask from "./pages/AddTask/AddTask";
import TaskEntry from "./pages/TaskEntry/TaskEntry";

const TodayNavigator = createNativeStackNavigator();

const Index = () => {
	return (
		<TodayNavigator.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<TodayNavigator.Screen name="Today" component={Today} />
			<TodayNavigator.Screen name="AddTask" component={AddTask} />
			<TodayNavigator.Screen name="TaskEntry" component={TaskEntry} />
		</TodayNavigator.Navigator>
	);
};

export default Index;
