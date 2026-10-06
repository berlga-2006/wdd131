let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", function (e) {
    // Toggle whether the links are displayed or not
    let nav = document.querySelector("nav");

    // if-else statement
    // if (nav.style.display === '') {
    //     nav.style.display = 'flex';
    // } else {
    //     nav.style.display = '';
    // }
    // ternary operator
    // nav.style.display = nav.style.display === '' ? 'flex' : '';

    // Toggle X animation for button
    menuButton.classList.toggle("change");
    nav.classList.toggle("change");
});


