/*const dino = document.getElementById("character");
const cactus = document.getElementById("block");

function jump() {
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
    dino.classList.remove("jump");
    }, 300);}
}

let isAlive = setInterval(function () {
  // get current dino Y position
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
);

  // detect collision
if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
}
}, 10);

document.addEventListener("keydown", function (event) {
jump();
});



const openBtn = document.getElementById('openPopup');
        const popupOverlay = document.getElementById('popupOverlay');
        const cancelBtn = document.getElementById('cancelBtn');

        openBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'flex';
        });
        cancelBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });

        // Close when clicking outside the popup
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });*/



const openbtn = document.getElementById('menopen');
const popupover = document.getElementById('popwin');

openbtn.addEventListener('click', () => {
    popupover.style.display = 'flex';
});

popupover.addEventListener('click', (e) => {
    if (e.target === popupover) {
        popupover.style.display = 'none';
    }
});