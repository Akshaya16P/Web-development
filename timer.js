var time;
var setInterval1=setInterval(function(){
    time=time-1;
    console.log(parseInt(time/60)+":"+(time%60))
    document.getElementsByClassName("minutes")[0].innerText=parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerText=(time%60);
},1000)
setTimeout(function(){
    clearInterval(setInterval1)
},600000);
function start(){
    document.getElementsByTagName("input")[0].value;
}
function stop(){
    setTimeout(function(){
    clearInterval(setInterval1)
},600000);
}
var times=setInterval1.map((ele)=>{
    return (
        `<div class="timer-section">
            <div class="minutes">${parseInt(time/60)}</div>
            <div class="seconds">${time%60}</div>
        </div>`
     )
    }
)
var element =document.getElementsByClassName("clock-div")[0];
console.log(element);
element.innerHTML=times;
