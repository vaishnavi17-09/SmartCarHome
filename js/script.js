// ===============================
// Smart Car Dashboard Script
// ===============================

// Live Clock
function updateClock() {
    const now = new Date();

    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    const date = now.toLocaleDateString("en-IN", options);
    const time = now.toLocaleTimeString("en-IN");

    document.getElementById("clock").innerHTML =
        `<i class="fa-solid fa-clock"></i> ${date} | ${time}`;
}

setInterval(updateClock, 1000);
updateClock();

// ------------------------------
// Smart Home Controls
// ------------------------------

const buttons = document.querySelectorAll(".controls button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        if (this.innerText.includes("OFF")) {

            this.innerText = this.innerText.replace("OFF", "ON");
            this.style.background = "#16a34a";

        }

        else if (this.innerText.includes("ON")) {

            this.innerText = this.innerText.replace("ON", "OFF");
            this.style.background = "#00bfff";

        }

        else if (this.innerText.includes("Locked")) {

            this.innerText = "Door Unlocked";
            this.style.background = "#16a34a";

        }

        else if (this.innerText.includes("Unlocked")) {

            this.innerText = "Door Locked";
            this.style.background = "#00bfff";

        }

        else if (this.innerText.includes("Closed")) {

            this.innerText = "Garage Open";
            this.style.background = "#16a34a";

        }

        else if (this.innerText.includes("Open")) {

            this.innerText = "Garage Closed";
            this.style.background = "#00bfff";

        }

    });

});

// ------------------------------
// Demo Live Car Data
// ------------------------------

setInterval(() => {

    document.querySelectorAll(".card p")[0].innerText =
        Math.floor(Math.random() * 40 + 60) + " km/h";

    document.querySelectorAll(".card p")[1].innerText =
        Math.floor(Math.random() * 30 + 60) + "%";

    document.querySelectorAll(".card p")[2].innerText =
        Math.floor(Math.random() * 10 + 90) + "%";

    document.querySelectorAll(".card p")[3].innerText =
        Math.floor(Math.random() * 8 + 30) + "°C";

}, 3000);