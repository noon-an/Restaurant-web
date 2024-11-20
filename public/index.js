const food = document.querySelector('#food');
const menu = document.querySelector('#menu');

food.addEventListener('click', () => {
if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})