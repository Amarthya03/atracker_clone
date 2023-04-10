import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PizzaTranslator from "./components/PizzaTranslator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavbar from "./components/BottomNavbar";

// const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Stack.Navigator>
				<Stack.Screen
					name="PizzaTranslator"
					component={PizzaTranslator}
					options={{
						title: "Pizza Translator",
						headerShown: true,
					}}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" /> */}
			<BottomNavbar />
		</NavigationContainer>
	);
}
