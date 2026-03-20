import { useEffect, useState } from "react";
import { Header } from "./header";
import { apifetchstring } from "../utili/api";
import type { imageobj } from "../types/image";
import { gameTypeOption } from "../utili/gametype";
import { giphyresponseobj } from "../utili/convertobj";
import { Content } from "./content";

export function Holder(){
const [score, setScore] = useState<Number>(0) 
const[gametype,setGameType] = useState<string>("Food") 
const [images, setImages] = useState<imageobj[]>([])

useEffect(()=>{
setImages([])  
//     gameTypeOption[gametype].forEach((element:string) => {
//       const apiCall =  async () => {
//         const imagePromise = await fetch(apifetchstring + element)    
//          const image = await imagePromise.json()
//          return image } 
//          apiCall().then((res)=>{const response:imageobj = giphyresponseobj(res)
//           setImages(prev=>[...prev,response])
//         })
//  });


for (const key in gameTypeOption) {
 if (key.toLowerCase() === gametype.toLowerCase()) {
    gameTypeOption[key].forEach((element:string) => {
      const apiCall =  async () => {
        const imagePromise = await fetch(apifetchstring + element)    
         const image = await imagePromise.json()
         return image } 
         apiCall().then((res)=>{const response:imageobj = giphyresponseobj(res)
          setImages(prev=>[...prev,response])
        })
 });     
}        
}

},[gametype])
return (
<>
<Header/>
<Content images={images} />
</>    
)    
}