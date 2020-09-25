$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveheight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

function colorToggle() {
    var change = document.body;
    change.classList.toggle("dark-mode");
  }