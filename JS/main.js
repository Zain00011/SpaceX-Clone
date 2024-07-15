const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('Stop-Scrolling')
    menu.classList.toggle('show-menu');
}

function scrollPage(){
    const scrollPos = window.scrollY;
    if(scrollPos > 90 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }
    else if(scrollPos <= 90 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) =>{
        counter.innerText = "0";

        const updateCount = () =>{
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100; 
            if(count < target){
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

function reset(){
    counters.forEach((counter) =>{
        counter.innerText = "0";
    });
}
