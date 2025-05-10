
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
        });

var typed = new Typed(".auto-type", {
    strings: ["Welcome", "Bienvenido", "ようこそ", "أهلا"],
    typespeed: 150,
    backspeed: 150,
    looped: true
})