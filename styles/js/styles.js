const bars = document.getElementById("bars");
const menuHamb = document.getElementById("options_2");
const navPrincipal = document.getElementById("options");
const icons = document.getElementById("i");
const iconW = document.getElementById("icon-floor");
const colorChange = document.getElementById("changeColor");
const h1Elements = document.querySelectorAll("#title-change");
const chageLogo = document.getElementById("logo_change");
const chageLogoP = document.getElementById("logo_initial");
const nav = document.querySelectorAll("#nav");
bars.addEventListener('click', () => {
    menuHamb.classList.toggle('show');
});

function toggleColorMode() {
    document.body.classList.toggle('color-blind-mode');
    menuHamb.classList.toggle('title-daltonic2');
    navPrincipal.classList.toggle('title-daltonic');
    icons.classList.toggle('icon-change');
    iconW.classList.toggle('icon-w');
    h1Elements.forEach(h1Element => {
        h1Element.classList.toggle('icon-change');
    });
    chageLogo.classList.toggle('logo_changeShow');
    chageLogoP.classList.toggle('logo_changeHide');
    nav.forEach(navs => {
        navs.classList.toggle('backgroundN');
    });
    bars.classList.toggle('icon-change');
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.classList.toggle('darkimg');
    });
}

let currentSlide = 0;

function moveSlide(direction) {
    const track = document.getElementById('track');
    const slides = track.querySelectorAll('.slick');
    const totalSlides = slides.length;

    // Calculate the number of slides visible at a time
    const visibleSlides = 4;
    const maxIndex = totalSlides - visibleSlides;

    // Update current slide index based on direction
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = maxIndex;
    } else if (currentSlide > maxIndex) {
        currentSlide = 0;
    }

    // Move the track
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


