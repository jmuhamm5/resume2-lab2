$(document).ready(function(){
    // Carousel Slider
    $('.carousel.carousel-slider').carousel({fullWidth: true});

    // Next slide
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 4); // Move next n times.

    // Previous slide
    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', 4); // Move prev n times.

    // Parallax
    $('.parallax').parallax();
});
