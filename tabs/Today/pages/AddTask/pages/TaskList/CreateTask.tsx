import { View, Button } from "react-native";
import React from "react";
import { Appbar, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

const CreateTask = () => {
	const navigator = useNavigation();

	return (
		<>
			<Appbar.Header>
				<Appbar.BackAction
					onPress={() => {
						navigator.goBack();
					}}
				/>
				<Appbar.Content title="Create Task" />
				<Appbar.Action
					icon="plus"
					onPress={() => {
						console.log("Task Created");
					}}
				/>
			</Appbar.Header>
			<Formik
				initialValues={{
					task: "",
					tag: "",
					goal: "",
					color: "",
					icon: "",
					description: "",
				}}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleBlur, handleSubmit, values }: any) => (
					<View>
						<TextInput
							mode="outlined"
							label="Task"
							onChangeText={handleChange("task")}
							onBlur={handleBlur("task")}
							value={values.task}
						/>
						<TextInput
							mode="outlined"
							label="Tag"
							onChangeText={handleChange("tag")}
							onBlur={handleBlur("tag")}
							value={values.tag}
						/>
						<TextInput
							mode="outlined"
							label="Goal"
							onChangeText={handleChange("goal")}
							onBlur={handleBlur("goal")}
							value={values.goal}
						/>
						<TextInput
							mode="outlined"
							label="Color"
							onChangeText={handleChange("color")}
							onBlur={handleBlur("color")}
							value={values.color}
						/>
						<TextInput
							mode="outlined"
							label="icon"
							onChangeText={handleChange("icon")}
							onBlur={handleBlur("icon")}
							value={values.icon}
						/>
						<TextInput
							mode="outlined"
							label="Description"
							onChangeText={handleChange("description")}
							onBlur={handleBlur("description")}
							value={values.description}
						/>
						<Button onPress={handleSubmit} title="Submit" />
					</View>
				)}
			</Formik>
		</>
	);
};

export default CreateTask;
