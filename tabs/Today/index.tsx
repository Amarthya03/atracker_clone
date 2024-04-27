import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Today from "./pages/Today";
import AddTask from "./pages/AddTask/AddTask";
import TaskEntry from "./pages/TaskEntry/TaskEntry";
import CreateTask from "./pages/AddTask/pages/TaskList/CreateTask";
import CreateTag from "./pages/AddTask/pages/TagList/CreateTag";
import CreateGoal from "./pages/AddTask/pages/GoalList/CreateGoal";

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
			<TodayNavigator.Screen name="CreateTask" component={CreateTask} />
			<TodayNavigator.Screen name="CreateTag" component={CreateTag} />
			<TodayNavigator.Screen name="CreateGoal" component={CreateGoal} />
		</TodayNavigator.Navigator>
	);
};

export default Index;
