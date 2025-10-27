import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function CategoriesScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Categories</Text>
      <Button title='Catogory Detail'
            onPress={()=> navigation.navigate('CatogeryDetails')}
            />
            <Button title='Random'
            onPress={()=> navigation.navigate('Random')}
            />
            <Button title='Search'
            onPress={()=> navigation.navigate('Search')}
            />
            <Button title='Saved'
            onPress={()=> navigation.navigate('Saved')}
            />
    </View>
    
  );
}