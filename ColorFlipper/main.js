
function click(color){
    document.body.style.backgroundColor = color;
}


//or simply ham html me jake buttons me onClick event lgake direct ye click function pass bhi krr skte hai which is simple ans less code is required

let bt1=document.querySelector(".green");
bt1.addEventListener('click',function(){
    click(bt1.className)
});
let bt2=document.querySelector(".blue");
bt2.addEventListener('click',function(){
    click(bt2.className)
});
let bt3=document.querySelector(".pink");
bt3.addEventListener('click',function(){
    click(bt3.className)
});
let bt4=document.querySelector(".red");
bt4.addEventListener('click',function(){
    click(bt4.className)
});


// for random
let red=Math.floor(Math.random()*255+1);
let green=Math.floor(Math.random()*255+1);
let blue=Math.floor(Math.random()*255+1);
let random = document.querySelector(".random")
 random.addEventListener('click',function(){
    let color=`rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor=color
 })

// function changecolor(btn) {
//     btn.addEventListener('click', function(event) {
//         document.body.style.backgroundColor = event.target.className.split(' ')[1];
//     });
// }

// let bt1 = document.querySelector(".green");
// let bt2 = document.querySelector(".blue");
// let bt3 = document.querySelector(".red");
// let bt4 = document.querySelector(".pink");

// changecolor(bt1);
// changecolor(bt2);
// changecolor(bt3);
// changecolor(bt4);