import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function App() {
  const data = [
    {
      name: "Pookie",
      age: 3,
      breed: "dog",
    },
    {
      name: "Schmookums",
      age: 5,
      breed: "cat",
    },
    {
      name: "C Plus Plus",
      age: 124,
      breed: "Creature of Hell"
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-500">
      <SafeAreaView className="items-center">
        <Text className="text-yellow-500 font-bold text-3xl"> Protopet </Text>
      </SafeAreaView>
      <SafeAreaView className="flex-1 justify-center items-center">
        {data.map((item) => (
          <Text className="text-white">
            {item.name} - {item.age} - {item.breed}
          </Text>
        ))}
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
