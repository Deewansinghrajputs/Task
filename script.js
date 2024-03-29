let box = document.querySelector(".Box2");
 let btn = document.querySelector("button");
 
 btn.addEventListener("click", function(){
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);

    box.style.background = `rgb(${color1}, ${color2},${color3})`
 })

