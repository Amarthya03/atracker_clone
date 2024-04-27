import { View, Text } from "react-native";
import React from "react";
import { TabScreen, Tabs } from "react-native-paper-tabs";

const TaskList = () => {
	return (
		<Tabs
			// defaultIndex={0} // default = 0
			uppercase={false} // true/false | default=true | labels are uppercase
			showTextLabel={true} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
			// iconPosition // leading, top | default=leading
			// style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
			// dark={false} // works the same as AppBar in react-native-paper
			// theme={} // works the same as AppBar in react-native-paper
			// mode="scrollable" // fixed, scrollable | default=fixed
			// onChangeIndex={(newIndex) => {}} // react on index change
			// showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
			// disableSwipe={false} // (default=false) disable swipe to left/right gestures
		>
			<TabScreen label="Active tasks">
				<Text>Active</Text>
			</TabScreen>
			<TabScreen label="All tasks">
				<Text>All</Text>
			</TabScreen>
		</Tabs>
	);
};

export default TaskList;
