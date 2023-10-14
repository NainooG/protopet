import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    // <SafeAreaView className="flex-1 bg-slate-600 items-center">
    //   <SafeAreaView>
    //     <Text className="text-white font-bold text-3xl"> Protopet</Text>
    //   </SafeAreaView>
    //   <SafeAreaView>
    //     <Text className="text-white justify-center">App</Text>
    //   </SafeAreaView>
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    <SafeAreaView className="flex-1 bg-slate-500">
      <SafeAreaView className="items-center">
        <Text className="text-white font-bold text-2xl"> Protopet </Text>
      </SafeAreaView>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-white">App</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
