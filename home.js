
const openBtn = document.getElementById('openPopup');
const openbtn = document.getElementById('menopen');

const popupover = document.getElementById('popwin');
const popupOverlay = document.getElementById('popupOverlay');
const cancelBtn = document.getElementById('cancelBtn');

openBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

openbtn.addEventListener('click', () => {
    popupover.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close when clicking outside the popup
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

popupover.addEventListener('click', (e) => {
    if (e.target === popupover) {
        popupover.style.display = 'none';
    }
});

var typed = new Typed(".auto-type", {
    strings: ["Welcome", "Bienvenido", "ようこそ", "أهلا"],
    typespeed: 150,
    backspeed: 150,
    looped: true
})