// 1. Get HTML elements
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let gallerySection = document.querySelector('.gallery');
let closeGallery = document.querySelector('.close-viewer');

// 2. Event Listeners
// When image clicked, open modal
gallerySection.addEventListener('click', (event) => {
    if (event.target.src !== undefined) {
        // display modal
        modalImage.src = event.target.src.replace('sm', 'full');
        modal.showModal();
    }
});

// When close button is pressed, close modal
closeGallery.addEventListener('click', (event) => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
})
