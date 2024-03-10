import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex items-center justify-center h-full">
        <Text className="text-red-600">
          Openup App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
