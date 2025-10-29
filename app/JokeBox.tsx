import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { checkSavedJoke, deleteSavedJoke, saveJoke } from "./ChuckAPI";

type JokeBoxProps = {
    joketext:string,
    onDelete:()=>void
}

export function JokeBox({joketext, onDelete}:JokeBoxProps) {
    const [isSaved, setIsSaved]= useState(false)

    useEffect(()=>{
        checksaved()
    },[])

 async function checksaved() {
        const saved = await checkSavedJoke(joketext)
       setIsSaved(saved)
    }
    async function deleteJoke() {
       await deleteSavedJoke(joketext)
       if(onDelete!=undefined){
        onDelete()
       }
    }
    
    return(
         <View style={{margin:30,padding:10,backgroundColor:isSaved?"skyblue":"yellow"}}>
        
             <Text>{joketext}</Text>

              {isSaved==false && 
              <Button title="Save " onPress={()=>{
                saveJoke(joketext)
                setIsSaved(true)
                 }}/>
                 }

                 {isSaved==true && 
              <Button title="delete" onPress={()=>{
                deleteJoke()
                setIsSaved(false)
                 }}/>}
                
              </View>
    )
}

/* async function deleteJoke() {
    await deleteSavedJoke(joketext)
    if(onDelete){
    onDelete()
    }
}*/