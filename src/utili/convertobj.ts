import type { apiresponsegiphy } from "../types/apiresponsegiphy";
import type { imageobj } from "../types/image";

export function giphyresponseobj (res:apiresponsegiphy):imageobj{
let image:imageobj = {
url: res.data.images.original.url,
id: Number(res.data.id),
title:res.data.title

} 

    return   image  
}