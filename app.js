// HAMBURGER MENU
// When user clicks on the hamburger menu icon
// - show the slide-out menu
// - turn the hamburger menu icon into X button

// When user clicks on the X button on the slide-out menu
// - hide the slide-out menu
// - turn the X button back into the hamburger menu icon 

// When user clicks one of the menus
// - hide the slide-out menu
// - go to the page

// traget elements
const hamburgerMenuElement = document.querySelector(".hamburgerMenu");
const navMenuElement = document.querySelector(".slideOutNav");
const contentElement = document.querySelector(".header");

// On click, open slide-out nav and replace hamburger icon to X button
// On re-click, close slide-out nav and replace X button to hamburger icon
hamburgerMenuElement.addEventListener("click", function(){
    hamburgerMenuElement.classList.toggle("active");
    navMenuElement.classList.toggle("active");
    contentElement.classList.toggle("active")
})

// On click, close slide-out nav and go to the page
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click",  function (){
    hamburgerMenuElement.classList.remove("active");
    navMenuElement.classList.remove("active");
    contentElement.classList.remove("active");
}))
