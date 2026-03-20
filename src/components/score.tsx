
import { Option } from "./options";


export function Sidebar({setGameType}:{score:number, setGameType:(value:string) =>void}){
return (
 <>
<div className="gametype-container"><label htmlFor="gametype">Select Your Game Type</label>
<select name="gametype"  id="gametype" onChange={(e)=>{setGameType(e.target.value)}}>
 <Option /> 
</select>
</div> 
 </>   
)
}