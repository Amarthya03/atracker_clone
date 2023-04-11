import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavbar from "./components/BottomNavbar";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<BottomNavbar />
			</NavigationContainer>
		</Provider>
	);
}
