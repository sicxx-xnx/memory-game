
import { useState } from "react";
import type { imageobj } from "../types/image";
import { GameCard } from "./gamecard";
import { Sidebar } from "./score";



export function Content({images, score, setGameType, setImages,setScore}:{images:imageobj[],score:number,setGameType:(value:string)=> void, setImages: (value: React.SetStateAction<imageobj[]>) => void, setScore: React.Dispatch<React.SetStateAction<number>>}){
const [highScore,setHighScore] = useState<number>(0)

    return (
        <div className="content-container">
            <div className="cards">
                {images.map((image,index)=> {
                    return (
                    <GameCard extraclass = {index} score={score} highScore = {highScore} key={image.id} id={image.id} url={image.url} title={image.title} imagesstate = {images} setImages = {setImages} setScore = {setScore} setHighScore = {setHighScore} />
                )})}
            </div>
            <div className="sidebar"><Sidebar score = {score} highScore = {highScore} setGameType = {setGameType}/></div>
        </div>
    )    
}