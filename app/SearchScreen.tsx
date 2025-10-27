import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function SearchScreen() {
    const navigation = useNavigation()
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search</Text>

      <Button title='Search Detail'
                  onPress={()=> navigation.navigate('SearchDetail')}
                  />
    </View>
  );
}