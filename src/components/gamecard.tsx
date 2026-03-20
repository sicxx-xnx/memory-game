export function GameCard({url, title, id}:{url:string, title:string, id:number }){
    return (
        <>
        <div className="gamecard" data-id={id} style={{backgroundImage: `url(${url})`}}>
          <div className="gamecard-content">
            <p>{title}</p>
          </div>
        </div>
        </>
    )    
}