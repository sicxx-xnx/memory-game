import type { imageobj } from "../types/image";
import { handleClick } from "../utili/handleclick";

export function GameCard({url, title, id, extraclass, imagesstate, setScore, setImages,setHighScore,score,highScore}:{url:string, title:string, id:string, extraclass:number, imagesstate:imageobj[], setImages: (value: React.SetStateAction<imageobj[]>) => void, setScore: React.Dispatch<React.SetStateAction<number>>, setHighScore: React.Dispatch<React.SetStateAction<number>>,score:number,highScore:number }){
    return (
        <>
        <div className= {'gamecard' + " " + "card"+ extraclass} onClick = {(e)=>{
            e.stopPropagation
            handleClick(id,setScore,imagesstate,setImages,setHighScore,score,highScore)}}   data-id={id} style={{backgroundImage: `url(${url})`}}>
          <div className="gamecard-content">
            <p>{title}</p>
          </div>
        </div>
        </>
    )    
}