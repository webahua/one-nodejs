<<<<<<< HEAD
export async function fetcher(url,option = {} ) {
    let response;
    if(!option){
        response = await fetch(url);
    }else{
        response = await fetch(url,option);
    }
    const data = await response.json();
    return data;
=======
export async function fetcher(url,option = {} ) {
    let response;
    if(!option){
        response = await fetch(url);
    }else{
        response = await fetch(url,option);
    }
    const data = await response.json();
    return data;
>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
}