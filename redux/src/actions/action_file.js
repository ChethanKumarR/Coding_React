const base_url = "http://localhost:8900";

export function latestNews(){
    console.log("calling article reducer latestNews action")
    const output = fetch(`${base_url}/articles?_end=5`, {method:'GET'})
   .then((data) => data.json())

   return{
       type:'GET_LATEST',
       payload:output
   }
}

export function articleNews(){
    console.log("calling the article reducer articleNews action")
    const output = fetch(`${base_url}/articles?_start=1&_end=8`, {method:"GET"})
    .then((data)=> data.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}

export function galleryNews(){
    console.log("calling the article reducer galleryNews action")
    const output = fetch(`${base_url}/galleries?_limit=5`, {method:"GET"})
    .then((data)=> data.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}

export function selectedNews(id){
    console.log("calling the article reducer selectedNews action")
    const output = fetch(`${base_url}/articles?id=${id}`, {method:"GET"})
    .then((data)=> data.json())

    return{
        type:'SELECTED_NEWS',
        payload:output
    }
}