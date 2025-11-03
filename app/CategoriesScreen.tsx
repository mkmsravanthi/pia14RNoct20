import { APICategories } from '@/api/ChuckAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";


export function CategoriesScreen() {
  const navigation = useNavigation()
  const [categories, setCategories]= useState<string[]>([])
  const[errorloading, setErrorloading]= useState(false)
  const [fruit, setfruit] = useState("No fruit")

  useEffect(()=>{
    loadCategories()
  },[])

  async function loadCategories() {
    const loadedcategories = await APICategories()
    if(loadedcategories== null){
      //FEL
      setErrorloading(true)
      
    }else{
    setCategories(loadedcategories)
    }
  }
    async function savefruit() {
      await AsyncStorage.setItem('fruit','banana')
    }
    async function loadfruit() {
      const loadedfruit= await AsyncStorage.getItem("fruit")
      if(loadedfruit!=null){
        setfruit(loadedfruit)
      }
      
    }
    
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
             <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <Button
                    title='RANDOM'
                    onPress={() => navigation.navigate('Random')}
                />

                <Button
                    title='SEARCH'
                    onPress={() => navigation.navigate('Search')}
                />

                <Button
                    title='SAVED'
                    onPress={() => navigation.navigate('Saved')}
                />
            </View>
             {categories.length == 0 && errorloading == false &&
                <Text>Laddar...</Text>
            }

            {errorloading == true &&
                <Text>ERROR LOADING!!!!!!!!</Text>
            }

            <FlatList
                style={{ width: "100%" }}
                numColumns={3}
                data={categories}
                renderItem={(item) =>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => navigation.navigate('CategoryDetails', { category: item.item })}>
                        <View style={{ height: 50, justifyContent: "center", alignItems: "center" }}>
                            <Text>{item.item.charAt(0).toUpperCase() + item.item.slice(1)}</Text>
                        </View>
                    </TouchableOpacity>
                         }
            />



        </View>
      
  );
}

/*<Button title='Catogory Detail'
            onPress={()=> navigation.navigate('CatogeryDetails')}
            />*/
            //<Text>Categories</Text>

            /* <Image
                source={require('@/assets/images/frog.jpg')}
                style={{ 
                    width: "100%", 
                    height: 200, 
                    backgroundColor: "red",
                    resizeMode: "cover"
                }}
            />
            */