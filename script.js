//  var addev=document.querySelector("st")

// var addev.addEventListener("click", stt)
// var stop=document.querySelector("sp").addEventListener("click", sp) 

// function stt(){
//   for (i=0, i<=60; i++;){
// setInterval(function(){
//     document.querySelector("#sec")(i)
// },i*1000)
//   }
// }

let [milliseconds,seconds,minites,hours]=[0,0,0,0]
let timerRef= document.querySelector("#timer-display")
let int = null;

document.querySelector("#Start-timer").addEventListener("click",()=>{
  if (int!==null)
    clearInterval(int);

  int = setInterval(displayTimer , 10);
});

document.querySelector("#Stop-timer").addEventListener("click", ()=>{
  clearInterval(int);
});

document.querySelector("#reset-timer").addEventListener("click", ()=>{
  clearInterval(int);
  [milliseconds,seconds,minites,hours]=[0,0,0,0];
  timerRef.innerHTML='00:00:00:000';
});



function displayTimer(){
  milliseconds += 10;
  if(milliseconds == 1000){
    milliseconds = 0;
    seconds++;
  if(seconds == 60){
    seconds =0;
    minites++;
    if(minites == 60){
      minites = 0;
      hours++;
    }
   }
  }
let h = hours < 10 ? "0" + hours: hours;
let m = minites < 10 ? "0" + minites: minites;
let s = seconds < 10 ? "0" + seconds: seconds;
let ms = milliseconds < 10 ? "0" + milliseconds:milliseconds < 100 ? "0" + milliseconds: milliseconds;

  timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}







