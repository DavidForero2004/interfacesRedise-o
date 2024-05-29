const bars = document.getElementById("bars");
const menuHamb = document.getElementById("options_2");

bars.addEventListener('click', () => {
    menuHamb.classList.toggle('show');
});