const imageContainer = document.querySelector('#images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-button');

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelectorAll("a");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

// Event listener to click on picture
imageContainer.addEventListener('click', (event) => {
    if (event.target.src !== undefined) {
        // Open modal and change source of img
        modalImage.src = event.target.src.replace('sm', 'full');
        modal.showModal();
    }
});

// Event listeners to close the modal
closeButton.addEventListener('click', (event) => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Event listener to open the menu in small screen mode
menuButton.addEventListener('click', (event) => {
    menu.forEach(a => {
        a.classList.toggle('open');
    });
    menuButton.classList.toggle('change');
});