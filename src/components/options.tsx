import { gameTypeOption } from "../utili/gametype";

export function Option(){   
return (
<>   
{Object.keys(gameTypeOption).map(game => (
  <option key={game} value={game}>{game} </option>
))}

</>  
)    
}