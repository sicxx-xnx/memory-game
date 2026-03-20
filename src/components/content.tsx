
import type { imageobj } from "../types/image";
import { GameCard } from "./gamecard";
import { Sidebar } from "./score";

export function Content({images, score, setGameType}:{images:imageobj[],score:number,setGameType:(value:string)=> void}){
    return (
        <div className="content-container">
            <div className="cards">
                {images.map((image,index)=> {
                    return (
                    <GameCard extraclass = {index} key={image.id} id={image.id} url={image.url} title={image.title} />
                )})}
            </div>
            <div className="sidebar"><Sidebar score = {score} setGameType = {setGameType}/></div>
        </div>
    )    
}