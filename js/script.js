function slider() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        breakpoints: {
            768: {
                perView: 1
            }
        }
    }).mount()
};

function scrollUp() {
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    });
};

function addButtonUpListener() {
    const btn = document.querySelector('.js-scrollUp');

    btn.addEventListener('click', scrollUp);
};

function handleMenu() {
    const openMenuBtn = document.querySelector('.js--open-menu');
    const closeMenuBtn = document.querySelector('.js--close-menu');
    const menu = document.querySelector('.js--menu');

    openMenuBtn.addEventListener('click', () => {
        menu.classList.add('is--active');
    });

    closeMenuBtn.addEventListener('click', () => {
        menu.classList.remove('is--active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    slider();
    addButtonUpListener();
    handleMenu();
});