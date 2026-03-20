import type { imageobj } from "../types/image";
import { GameCard } from "./gamecard";

export function Content({images}:{images:imageobj[]}){
    return (
        <div className="content-container">
            <div className="cards">
                {images.map((image)=> (
                    <GameCard key={image.id} id={image.id} url={image.url} title={image.title} />
                ))}
            </div>
            <div className="sidebar"></div>
        </div>
    )    
}