// ===========================
// Live Clock
// ===========================

function updateTime() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    const clock = document.getElementById("time");

    if(clock){
        clock.innerHTML = time;
    }

}

setInterval(updateTime,1000);
updateTime();


// ===========================
// Temperature Slider
// ===========================

const slider = document.getElementById("tempSlider");
const setTemp = document.getElementById("setTemp");

if(slider){

    setTemp.innerHTML = slider.value + "°C";

    slider.oninput = function(){

        setTemp.innerHTML = this.value + "°C";

    }

}


// ===========================
// AC ON / OFF
// ===========================

const acBtn = document.getElementById("acBtn");

let acStatus = true;

if(acBtn){

acBtn.onclick = function(){

    if(acStatus){

        acBtn.innerHTML="OFF";
        acBtn.style.background="#ff4d4d";

        alert("Air Conditioner Turned OFF");

    }

    else{

        acBtn.innerHTML="ON";
        acBtn.style.background="#22c55e";

        alert("Air Conditioner Turned ON");

    }

    acStatus=!acStatus;

}

}


// ===========================
// Mode Buttons
// ===========================

const modeButtons=document.querySelectorAll(".modeBtn");

modeButtons.forEach(button=>{

button.addEventListener("click",function(){

if(this.innerHTML=="OFF"){

this.innerHTML="ON";

this.style.background="#22c55e";

}

else if(this.innerHTML=="ON"){

this.innerHTML="OFF";

this.style.background="#ff4d4d";

}

});

});


// ===========================
// Fan Speed
// ===========================

const fan=document.getElementById("fanSpeed");

const speedList=[

"Low",

"Medium",

"High",

"Auto"

];

let i=1;

setInterval(()=>{

if(fan){

fan.innerHTML=speedList[i];

}

i++;

if(i==4){

i=0;

}

},5000);


// ===========================
// Room Temperature
// ===========================

const room=document.getElementById("roomTemp");

setInterval(()=>{

const temp=Math.floor(Math.random()*5)+24;

if(room){

room.innerHTML=temp+"°C";

}

},4000);


// ===========================
// Apply Button
// ===========================

const save=document.querySelector(".saveBtn");

if(save){

save.onclick=function(){

alert("Settings Applied Successfully");

}

}


// ===========================
// Page Loaded
// ===========================

window.onload=function(){

console.log("AC Control Loaded");

};