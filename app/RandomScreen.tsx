import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Chuckjoke } from "./Chuckjoke";

export function RandomScreen() {
     const [joke,setJoke]= useState("NO Joke")
    
      async function getapi(){
     console.log("Hämpta från api")
     //https://api.chucknorris.io/jokes/random
    
     const respose= await fetch("https://api.chucknorris.io/jokes/random")
     const resultjson:Chuckjoke = await respose.json()
     console.log(resultjson.value)
     setJoke(resultjson.value)
      }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Random</Text>

      <Text>{joke}</Text>
            
            <Button title="API"
             onPress={()=> getapi()}
             />
    </View>
  );
}