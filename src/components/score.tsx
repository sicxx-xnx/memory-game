
import { Option } from "./options";


export function Sidebar({setGameType,score,highScore}:{score:number, highScore:number, setGameType:(value:string) =>void}){
return (
 <>
<div className="gametype-container"><label htmlFor="gametype">Select Your Game Type</label>
<select name="gametype"  id="gametype" onChange={(e)=>{setGameType(e.target.value)}}>
 <Option /> 
</select>
</div> 
<div className="score-board-container">
    <div className="current-score">Current Score: {score}</div>
    <div className="high-score">HighScore : {highScore}</div>
</div>
 </>   
)
}