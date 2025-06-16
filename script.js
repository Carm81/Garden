let plantHealth = 50
let maxHealth = 100
let plant = document.getElementById("plant")
let status = document.getElementById("status")

function waterPlant() {
    if (plantHealth < maxHealth) {
        plantHealth++
        updatePlant()
    }
}

function decay() {
    plantHealth--;
    if (plantHealth < 0) plantHealth = 0
    updatePlant()
}

function updatePlant() {
    if (plantHealth >= 85) {
        plant.textContent = "🌻";
        status.textContent = "Your plant is blooming!";
    } else if (plantHealth > 50) {
        plant.textContent = "🌱";
        status.textContent = "Your plant is okay";
    } else if (plantHealth >= 20) {
        plant.textContent = "🥀";
        status.textContent = "Your plant is thirsty";
    } else {
        plant.textContent = "💀";
        status.textContent = " Your plant is dead";
    }
}

let time = 0;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

setInterval(() => {
    time = (time + 1) % 100;

    const skyLight = 20 + Math.abs(50 - time) * 1.2;
    document.body.style.background = `linear-gradient(to top, hsl(120, 60%, 30%), hsl(200, 100%, ${skyLight}%))`;

    // Toggle visibility of sun and moon
    if (time >= 25 && time <= 75) {
        sun.style.opacity = "1";   // Daytime: show sun
        moon.style.opacity = "0";  // Hide moon
    } else {
        sun.style.opacity = "0";   // Nighttime: hide sun
        moon.style.opacity = "1";  // Show moon
    }
}, 200);





setInterval(decay, 5000)

updatePlant()