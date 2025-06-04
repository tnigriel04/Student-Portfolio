let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
});

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