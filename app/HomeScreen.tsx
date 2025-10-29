import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Chuckjoke } from "./Chuckjoke";



export function HomeScreen() {
  const navigation = useNavigation()

  const [joke,setJoke]= useState("NO Joke")

  async function getapi(){
 console.log("Hämpta från api")
 //https://api.chucknorris.io/jokes/random

 const response= await fetch("https://api.chucknorris.io/jokes/random")
 const resultjson: Chuckjoke = await response.json()
 console.log(resultjson.value)
 setJoke(resultjson.value)
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen är starten</Text>
      <Text>{joke}</Text>

      <Button title="API"
       onPress={()=> getapi()}
       />
      <Button 
        title='Go to details'
        onPress={()=> navigation.navigate('Details',{fruit:"Banan"})}
        />
        <Button title='Gå tredje'
        onPress={()=> navigation.navigate('Third')}
        />
    </View>
  );
}