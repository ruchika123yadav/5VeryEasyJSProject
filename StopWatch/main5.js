let secondElapsed=0;
let interval=null;
let time = document.querySelector('.timer');


function padStart(num){

    //yani ki jo num hai phele ushe string me convert me karega uske baad agr num ki value 2 digit se kam hai to uske age ek 0 preset krr dega
     return   String(num).padStart(2,"0");
}

function setTime( ){
    let min=Math.floor(secondElapsed/60);
    let sec =secondElapsed%60;
    time.innerText=`${padStart(min)}:${padStart(sec)}`;
}


function timer(){
    secondElapsed++;
      setTime( );
}

function start(){
    if(interval) stop();
    interval=setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);

}

function reset(){
stop();
secondElapsed=0;
setTime()

}