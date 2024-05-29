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
