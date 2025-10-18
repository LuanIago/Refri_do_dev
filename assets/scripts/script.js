let list = document.querySelectorAll('.item');
let buttonRight = document.querySelector('.arrow-right');
let buttonLeft = document.querySelector('.arrow-left');

let count = list.length;
let active = 0;


function nextSlide() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active < count - 1 ? active + 1 : 0;
    list[active].classList.add('active');
}

buttonRight.addEventListener('click', nextSlide);

buttonLeft.addEventListener('click', () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active > 0 ? active - 1 : count - 1;
    list[active].classList.add('active');
});


setInterval(nextSlide, 3000)