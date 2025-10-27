import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function SavedScreen() {
    const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Saved screen</Text>
    </View>
  );
}