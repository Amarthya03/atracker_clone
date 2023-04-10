import React, { useState } from "react";
import { ScrollView, Text, TextInput } from "react-native";

const PizzaTranslator = () => {
	const [text, setText] = useState("");

	return (
		<ScrollView
			style={{
				paddingTop: 80,
			}}
		>
			<TextInput
				style={{
					height: 40,
				}}
				placeholder="Type here to translate"
				onChangeText={(newText) => setText(newText)}
				defaultValue={text}
			/>
			<Text
				style={{
					padding: 10,
					fontSize: 42,
				}}
			>
				{text
					.split(" ")
					.map((word) => word && "🍕")
					.join(" ")}
			</Text>
		</ScrollView>
	);
};

export default PizzaTranslator;
