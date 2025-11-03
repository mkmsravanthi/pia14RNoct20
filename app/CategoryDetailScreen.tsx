import { APICategoryJoke } from "@/api/ChuckAPI";
import { JokeBox } from "@/Components/JokeBox";
import { JokeButton } from "@/Components/JokeButton";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type CategoryDetailScreenProps = {
  route: {
    params: {
      category:string
    }
  }
}

export function CategoryDetailScreen({route}: CategoryDetailScreenProps) {
    const {category}=route.params;
    const [joke,setJoke]= useState("NO Joke")
    
         useEffect(()=>{
            loadrandom()
         },[])
        
         async function loadrandom(){
            const joke= await APICategoryJoke(category)
            setJoke(joke)        
         }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
       <Text>{category}</Text>

            <JokeBox joketext={joke} />

            <JokeButton 
                buttontext="New joke" 
                buttonclick={() => loadrandom()} 
            />

        </View>
    );
}