(function () {
    let openBtn = document.querySelector('.btn--open');
    let closeBtn = document.querySelector('.btn--close');

    let menu = document.querySelector('.nav__list');

    openBtn.addEventListener('click', () => {
        openBtn.classList.add('active');
        menu.classList.add('active');
        closeBtn.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        closeBtn.classList.remove('active');
        menu.classList.remove('active');
        openBtn.classList.remove('active');
    });
})();



