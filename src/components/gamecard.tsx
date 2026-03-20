export function GameCard({url, title, id, extraclass}:{url:string, title:string, id:string|number, extraclass:number }){
    return (
        <>
        <div className= {'gamecard' + " " + "card"+ extraclass}   data-id={id} style={{backgroundImage: `url(${url})`}}>
          <div className="gamecard-content">
            <p>{title}</p>
          </div>
        </div>
        </>
    )    
}