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