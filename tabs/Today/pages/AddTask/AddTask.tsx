import React, { useEffect } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
	TabScreen,
	Tabs,
	useTabIndex,
	useTabNavigation,
} from "react-native-paper-tabs";
import GoalList from "./pages/GoalList/GoalList";
import TagList from "./pages/TagList/TagList";
import TaskList from "./pages/TaskList/TaskList";

const AddTask = () => {
	const navigator = useNavigation();

	const goTo = useTabNavigation();
	const index = useTabIndex();

	return (
		<>
			<Appbar.Header>
				<Appbar.BackAction
					onPress={() => {
						navigator.goBack();
					}}
				/>
				<Appbar.Content title="Add Task" />
				<Appbar.Action
					icon="plus"
					onPress={() => {
						navigator.navigate("TodayTab", {
							screen: "CreateTask",
						});
					}}
				/>
			</Appbar.Header>
			<Tabs
				// defaultIndex={0} // default = 0
				// uppercase={false} // true/false | default=true | labels are uppercase
				showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
				// iconPosition // leading, top | default=leading
				// style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
				// dark={false} // works the same as AppBar in react-native-paper
				// theme={} // works the same as AppBar in react-native-paper
				// mode="scrollable" // fixed, scrollable | default=fixed
				// onChangeIndex={(newIndex) => {}} // react on index change
				// showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
				// disableSwipe={false} // (default=false) disable swipe to left/right gestures
			>
				<TabScreen label="Tasks" icon="clipboard-list-outline">
					<TaskList />
				</TabScreen>
				<TabScreen label="Tags" icon="tag">
					<TagList />
				</TabScreen>
				<TabScreen
					label="Goals"
					icon="target"
					// optional props
					// onPressIn={() => {
					//   console.log('onPressIn explore');
					// }}
					// onPress={() => {
					//   console.log('onPress explore');
					// }}
				>
					<GoalList />
				</TabScreen>
			</Tabs>
		</>
	);
};

export default AddTask;
