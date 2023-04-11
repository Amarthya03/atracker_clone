import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavbar from "./components/BottomNavbar";

export default function App() {
	return (
		<NavigationContainer>
			<BottomNavbar />
		</NavigationContainer>
	);
}
