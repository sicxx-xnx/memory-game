import { useEffect, useState } from "react";
import { Header } from "./header";
import { apifetchstring } from "../utili/api";
import type { imageobj } from "../types/image";

export function Holder(){
const [score, setScore] = useState<Number>(0) 
const[gametype,setGameType] = useState<String>("Food") 
const [images, setImages] = useState<imageobj[]>([])
useEffect(()=>{
if (gametype === "Food") {
 const apiCall =  async () => {
        const imagePromise = await fetch(apifetchstring + "food")    
         const image = await imagePromise.json()
         return image  
    }  
apiCall().then(res=>console.log(res))    
}    

},[])
return (
<>
<Header/>
</>    
)    
}