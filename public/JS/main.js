window.addEventListener('DOMContentLoaded', function () {
    var carouselImages = document.querySelectorAll('.carousel img');
    var currentImage = 0;
    var interval = setInterval(changeImage, 5000);

    function changeImage() {
        carouselImages[currentImage].style.display = 'none';
        currentImage = (currentImage + 1) % carouselImages.length;
        carouselImages[currentImage].style.display = 'block';
    }
});

// Agrega el siguiente código JavaScript para ajustar el tamaño de la foto-container al hacerla más grande. gallery photos

var photoContainers = document.querySelectorAll('.photo-container');

photoContainers.forEach(function (container) {
    container.addEventListener('mouseenter', function () {
        this.style.width = '20%';
        this.style.height = '20%';
    });

    container.addEventListener('mouseleave', function () {
        this.style.width = '200px';
        this.style.height = '200px';
    });
});
