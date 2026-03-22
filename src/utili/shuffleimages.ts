import type { imageobj } from "../types/image"

export function shuffle(array:imageobj[],setimages:any){
const tempArray:any[] = [...array]
let holdingarray:any = []
const size = Math.floor(array.length/(Math.random()*3))

for (let index = 0; index < array.length; index += size) {
    const addtionalArray = tempArray.slice(index,index + size) ; 
    holdingarray = [...holdingarray,...addtionalArray]
    holdingarray.reverse()
    console.log(holdingarray)
}

setimages(holdingarray)
}