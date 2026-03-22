import type { imageobj } from "../types/image"
import { shuffle } from "./shuffleimages"

let clickedImages:string[] = []

export function handleClick(id:string,setScore:any,imagesarray:imageobj[],setImages:any, setHighScore: React.Dispatch<React.SetStateAction<number>>,score:number,highScore:number){
if (clickedImages.includes(id)) {
setScore(0)   
clickedImages = []
return 
}    
clickedImages.push(id)
setScore((prev:number)=>(prev + 1 ))
if (score >= highScore) {
setHighScore((prev:number) => (prev+1))    
}
shuffle(imagesarray,setImages)

}