btn=document.querySelector("button");
// div=document.querySelector(".size");

btn.addEventListener("click", function(){
    h1=document.querySelector("h1");
    rands=rand();
    h1.innerText=rands;

 let di=document.querySelector("div");
    // rands=rand();

di.style.backgroundColor=rands;

}

);
function rand(){
    red=Math.floor(Math.random()*255+1);
    green=Math.floor(Math.random()*255+1);
    blue=Math.floor(Math.random()*255+1);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}




// btn=document.querySelector("button");

// btn.addEventListener("click", function(){
//     h1=document.querySelector("h1");
//     rands=rand();
//     h1.innerText="rgb" + rands; // add space between "rgb" and rands

//     let di=document.querySelector("div");
//     di.style.backgroundColor = "rgb" + rands; // add "rgb" before rands

// });

// function rand(){
//     red = Math.floor(Math.random()*256); // adjust range to include 0-255
//     green = Math.floor(Math.random()*256);
//     blue = Math.floor(Math.random()*256);
//     let color=`(${red},${green},${blue})`;
//     return color;
// }
