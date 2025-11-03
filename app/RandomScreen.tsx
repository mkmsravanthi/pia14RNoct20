import { APIRandomJoke } from "@/api/ChuckAPI";
import { JokeBox } from "@/Components/JokeBox";
import { JokeButton } from "@/Components/JokeButton";
import { useEffect, useState } from "react";
import { View } from "react-native";

export function RandomScreen() {
     const [joke,setJoke]= useState("")

     useEffect(()=>{
        loadrandom()
     },[])
    
     async function loadrandom(){
      setJoke("")
        const joke= await APIRandomJoke()
        setJoke(joke)        
     }
     
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
       <JokeBox joketext={joke}/>

            
            <JokeButton 
                buttontext="New Joke"
                buttonclick={()=> loadrandom()}
             />
            
          </View>
  );
             
}