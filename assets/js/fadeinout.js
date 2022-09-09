window.onload = ()=>{
    document.body.style.opacity = "100%"
}



document.querySelectorAll('a').forEach(e=>{
    e.addEventListener('click', ()=>{GoTo(e.id)});
})

function GoTo(url){
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location = "http://"+window.location.toString().split('/')[2]+"/"+url
    }, 300);
}