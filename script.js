let body = document.querySelector('body');
console.log(body);

async function pics(){
    let data = await fetch('https://api.unsplash.com/photos/random/?client_id=HgAI8o_mQF82RKKHOQgwpJUX85VsmX2sc9lvcCFVkzU&count=10');
    let res = await data.json();
    console.log(res);
    res.forEach(x =>{
        let img = document.createElement('img');
        img.src = x.urls.full
        body.appendChild(img);
    }) 

}
pics();

window.addEventListener('scroll', ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        pics();
    }
})