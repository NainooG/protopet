import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import SwipeCardsScreen from "./SwipeCards";

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-slate-500">
      <SafeAreaView className="items-center">
        <Text className="text-white font-bold text-3xl"> Protopet </Text>
      </SafeAreaView>
      <SafeAreaView className="flex-1 justify-center items-center">
        <SwipeCardsScreen 
          
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
