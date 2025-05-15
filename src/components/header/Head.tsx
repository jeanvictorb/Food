import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function Head() {
  return (
    <View className="w-full flex flex-row items-center  justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color={"#15eb1521"} />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-800">Localização</Text>
      </View>

      <View className="flex-row items-center justify-center gap-1">
        <Feather name="map-pin" size={14} color={"#ff0000"} />
        <Text className="text-lg font-bold">Foz do iguaçu</Text>
      </View>
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color={"#15eb1521"} />
      </Pressable>
    </View>
  );
}
