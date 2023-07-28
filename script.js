const openMenu = document.querySelector(".hamburguer");
const navList = document.querySelector(".nav-list");
const navigation = document.querySelector("nav");


openMenu.addEventListener('click', () => {
    navigation.classList.toggle("active");
    navList.classList.toggle("none");
    document.querySelector("body").classList.toggle("active");
})