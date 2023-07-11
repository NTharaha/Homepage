let button = document.querySelector(".fa-bars"),
    links = document.querySelector(".navbar_menu");

button.addEventListener("click", () => {
    links.classList.toggle("display");
    button.classList.toggle("toggle1")
})

let button1 = document.querySelector(".fa-times"),
    links1 = document.querySelector(".navbar_menu");

button1.addEventListener("click", () => {
    links1.classList.toggle("display1");
    button1.classList.toggle("toggle2")
})


