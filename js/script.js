// =============================
// SMART CAR HOME DASHBOARD
// =============================

// Live Clock
function updateClock() {

    const now = new Date();

    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const clock = document.getElementById("clock");

    if (clock) {
        clock.innerHTML = now.toLocaleString("en-IN", options);
    }
}

setInterval(updateClock,1000);
updateClock();


// =============================
// RANDOM CAR STATUS
// =============================

function updateCarStatus(){

    const speed = document.getElementById("speed");
    const fuel = document.getElementById("fuel");
    const battery = document.getElementById("battery");

    if(speed)
        speed.innerHTML=Math.floor(Math.random()*40+60)+" km/h";

    if(fuel)
        fuel.innerHTML=Math.floor(Math.random()*30+60)+"%";

    if(battery)
        battery.innerHTML=Math.floor(Math.random()*20+80)+"%";

}

setInterval(updateCarStatus,5000);


// =============================
// SMART HOME BUTTONS
// =============================

const buttons=document.querySelectorAll(".buttons button");

buttons.forEach(button=>{

button.addEventListener("click",function(){

if(this.innerHTML.includes("OFF")){

this.innerHTML=this.innerHTML.replace("OFF","ON");

this.style.background="#22c55e";

}

else if(this.innerHTML.includes("ON")){

this.innerHTML=this.innerHTML.replace("ON","OFF");

this.style.background="#00d9ff";

}

else if(this.innerHTML.includes("Locked")){

this.innerHTML="Door Unlocked";

this.style.background="#f97316";

}

else if(this.innerHTML.includes("Unlocked")){

this.innerHTML="Door Locked";

this.style.background="#00d9ff";

}

else if(this.innerHTML.includes("Closed")){

this.innerHTML="Garage Open";

this.style.background="#f97316";

}

else if(this.innerHTML.includes("Open")){

this.innerHTML="Garage Closed";

this.style.background="#00d9ff";

}

});

});


// =============================
// WELCOME MESSAGE
// =============================

window.onload=function(){

console.log("Smart Car Home Dashboard Loaded");

alert("Welcome to Smart Car Home Dashboard");

};


// =============================
// NOTIFICATIONS
// =============================

const notificationList=document.querySelector(".notifications ul");

function addNotification(message){

if(notificationList){

const li=document.createElement("li");

li.innerHTML=message;

notificationList.prepend(li);

if(notificationList.children.length>6){

notificationList.removeChild(notificationList.lastChild);

}

}

}

setInterval(()=>{

const messages=[

"🚗 Engine Running",

"🔋 Battery Charging",

"🏠 Home Connected",

"📷 CCTV Active",

"🚪 Door Locked",

"🌦 Weather Updated",

"⚠ Fuel Level Low",

"📍 GPS Connected"

];

const random=Math.floor(Math.random()*messages.length);

addNotification(messages[random]);

},8000);


// =============================
// CAR IMAGE ANIMATION
// =============================

const car=document.querySelector(".car img");

if(car){

setInterval(()=>{

car.style.transform="translateY(-5px)";

setTimeout(()=>{

car.style.transform="translateY(0px)";

},500);

},2000);

}


// =============================
// CARD HOVER SOUND (OPTIONAL)
// =============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 20px rgba(0,217,255,.6)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});
function playSong(song){
    let audio = document.getElementById("audioPlayer");

    audio.src = song;
    audio.play();
}