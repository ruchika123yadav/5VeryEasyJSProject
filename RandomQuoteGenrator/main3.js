let button = document.querySelector('.btn');
let url ="https://catfact.ninja/fact";


// console.log(axious.get(url));

async function getFacts(){
    try{
        let res= await fetch(url);
        let data=await res.json();
        console.log(data.fact)
        return data;
    }
    catch(e){
        console.log(e);
    }
}


button.addEventListener('click', async function(){
        let data = await getFacts();
        console.log(data.fact)
     
    let p = document.querySelector('.para')
    p.innerText=data.fact;
    document.querySelector("body").append(p)
 })