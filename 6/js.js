let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');

function preloadImages(srcs) {
    srcs.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

const imageSources = Array.from(images).map(img => img.src);
preloadImages(imageSources);

function showImage(index) {
    images[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}
